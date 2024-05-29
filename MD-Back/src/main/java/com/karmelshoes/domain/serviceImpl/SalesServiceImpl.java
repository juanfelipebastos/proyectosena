package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.dto.SalesDto;
import com.karmelshoes.domain.models.ReportInvoiceModel;
import com.karmelshoes.domain.models.ReportSalesModel;
import com.karmelshoes.domain.service.ISalesService;
import com.karmelshoes.persistency.entity.ClientEntity;
import com.karmelshoes.persistency.entity.ProductEntity;
import com.karmelshoes.persistency.entity.SalesEntity;
import com.karmelshoes.persistency.entity.ShoppingCartEntity;
import com.karmelshoes.persistency.errors.exception.ClientIsEliminatedException;
import com.karmelshoes.persistency.errors.exception.ObjectNotFoundException;
import com.karmelshoes.persistency.errors.exception.ShoppingCartAssociatedWithSaleException;
import com.karmelshoes.persistency.mappers.ISalesMapper;
import com.karmelshoes.persistency.repository.IClientRepository;
import com.karmelshoes.persistency.repository.IProductEntityRepository;
import com.karmelshoes.persistency.repository.ISalesEntityRepository;
import com.karmelshoes.persistency.repository.IShoppingCartRepository;
import com.karmelshoes.persistency.validation.ValidationLogic;
import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
public class SalesServiceImpl implements ISalesService {

    private final ISalesEntityRepository iSalesEntityRepository;
    private final IClientRepository iClientRepository;
    private final IShoppingCartRepository iShoppingCartRepository;
    private final ISalesMapper iSalesMapper;
    private final IProductEntityRepository iProductEntityRepository;

    public SalesServiceImpl(ISalesEntityRepository iSalesEntityRepository, IClientRepository iClientRepository, IShoppingCartRepository iShoppingCartRepository,
                            ISalesMapper iSalesMapper, IProductEntityRepository iProductEntityRepository) {
        this.iSalesEntityRepository = iSalesEntityRepository;
        this.iClientRepository = iClientRepository;
        this.iShoppingCartRepository = iShoppingCartRepository;
        this.iSalesMapper = iSalesMapper;
        this.iProductEntityRepository = iProductEntityRepository;
    }

    @Transactional(readOnly = false)
    @Override
    public SalesDto create(SalesEntity sales, Long idShoppingCart) {
        Optional<ClientEntity> clientEntityOptional = iClientRepository.findById(sales.getClient().getId());
        Optional<ShoppingCartEntity> shoppingCartEntityOptional = iShoppingCartRepository.findById(idShoppingCart);

        if (clientEntityOptional.isPresent() && shoppingCartEntityOptional.isPresent()) {
            if (Boolean.TRUE.equals(ValidationLogic.validateIsClientDelete(clientEntityOptional.get()))) {
                if (Boolean.FALSE.equals(ValidationLogic.validateIsUsedInSale(iShoppingCartRepository, idShoppingCart))) {
                    ShoppingCartEntity shoppingCart = shoppingCartEntityOptional.get();
                    ClientEntity client = clientEntityOptional.get();
                    sales.setShoppingCart(shoppingCart);
                    sales.setClient(client);
                    sales.setSaleAmount(shoppingCart.getTotalPrice());
                    return iSalesMapper.salesEntityToSalesDto(iSalesEntityRepository.save(sales));
                } else {
                    throw new ShoppingCartAssociatedWithSaleException("El carro de compras con el ID:" + idShoppingCart + " ya esta asociado a una venta");
                }
            } else {
                throw new ClientIsEliminatedException("El cliente con el ID:" + clientEntityOptional.get().getId() + " no puede crear un carro de compras");
            }
        } else {
            throw new ObjectNotFoundException("El cliente con el ID:" + sales.getClient().getId() + " o el carro de compras con el ID: " + idShoppingCart + " no existen");
        }
    }

    @Transactional(readOnly = true)
    @Override
    public List<SalesDto> getAll() {
        return iSalesEntityRepository.findAll().stream()
                .map(iSalesMapper::salesEntityToSalesDto)
                .toList();
    }

    @Transactional(readOnly = true)
    @Override
    public SalesDto getById(Long id) {
        Optional<SalesEntity> salesEntityOptional = iSalesEntityRepository.findById(id);
        if (salesEntityOptional.isPresent()) {
            return iSalesMapper.salesEntityToSalesDto(salesEntityOptional.get());
        } else {
            throw new ObjectNotFoundException("La venta con el ID: " + id + " no existe");
        }
    }

    @Transactional(readOnly = true)
    @Override
    public List<SalesDto> getByIdClient(Long id) {
        Optional<ClientEntity> clientEntityOptional = iClientRepository.findById(id);
        if (clientEntityOptional.isPresent()) {
            return iSalesEntityRepository.findByClient_Id(clientEntityOptional.get().getId())
                    .stream().map(iSalesMapper::salesEntityToSalesDto)
                    .toList();
        } else {
            throw new ObjectNotFoundException("El cliente con el ID: " + id + " no existe");
        }
    }

    @Transactional(readOnly = true)
    @Override
    public List<SalesDto> getByDate(String dateString) {
        LocalDate date = LocalDate.parse(dateString);
        return iSalesEntityRepository.findByDate(date).stream()
                .map(iSalesMapper::salesEntityToSalesDto)
                .toList();
    }

    @Transactional(readOnly = true)
    @Override
    public List<SalesDto> getByPaymentMethod(String paymentMethod) {
        return iSalesEntityRepository.findByPaymentMethod(paymentMethod).stream()
                .map(iSalesMapper::salesEntityToSalesDto)
                .toList();
    }

    @Transactional(readOnly = true)
    @Override
    public SalesDto getByIdShoppingCart(Long id) {
        Optional<SalesEntity> shoppingCartEntityOptional = iSalesEntityRepository.findByShoppingCart_Id(id);
        if (shoppingCartEntityOptional.isPresent()) {
            return shoppingCartEntityOptional.map(iSalesMapper::salesEntityToSalesDto).get();
        } else {
            throw new ObjectNotFoundException("El carro de compras con el ID: " + id + " no existe");
        }
    }

    @Transactional(readOnly = true)
    @Override
    public ResponseEntity<Resource> invoiceGeneratedPDF(Long idShoppingCart) {
        Optional<SalesEntity> salesEntityOptional = iSalesEntityRepository.findByShoppingCart_Id(idShoppingCart);

        try {
            if (salesEntityOptional.isPresent()) {
                SalesEntity sales = salesEntityOptional.get();
                Long idInvoice = sales.getId();
                String nameClient = sales.getClient().getName();
                String address = sales.getClient().getAddress();
                String paymentMethod = sales.getPaymentMethod();
                String identification = sales.getClient().getIdentification();
                Double totalPriceInvoice = sales.getSaleAmount();
                DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

                String filePath = "src" + File.separator +
                        "main" + File.separator +
                        "resources" +
                        File.separator +
                        "templates" +
                        File.separator +
                        "invoiceReport.jrxml";

                Map<String, Object> parameters = new HashMap<>();
                parameters.put("idInvoice", idInvoice);
                parameters.put("date", sales.getDate().format(dateFormatter));
                parameters.put("nameClient", nameClient);
                parameters.put("address", address);
                parameters.put("paymentMethod", paymentMethod);
                parameters.put("identification", identification);
                parameters.put("totalPriceInvoice", totalPriceInvoice);
                parameters.put("imgDir", "classpath:static/images/");

                List<ReportInvoiceModel> reportInvoiceModel = new ArrayList<>();

                for (Map.Entry<ProductEntity, Integer> entry : sales.getShoppingCart().getCartItems().entrySet()) {
                    ProductEntity productEntity = entry.getKey();
                    Integer quantity = entry.getValue();

                    ReportInvoiceModel reportInvoice = new ReportInvoiceModel();
                    reportInvoice.setProductName(productEntity.getName());
                    reportInvoice.setModel(productEntity.getModel());
                    reportInvoice.setQuantity(quantity);
                    reportInvoice.setPriceUnitary(productEntity.getPrice());
                    reportInvoice.setCodeProduct(productEntity.getCode());

                    Double totalProductPrice = productEntity.getPrice() * quantity;
                    reportInvoice.setTotalProductPrice(totalProductPrice);

                    reportInvoiceModel.add(reportInvoice);
                }

                JRBeanCollectionDataSource tableDataSource = new JRBeanCollectionDataSource(reportInvoiceModel);
                parameters.put("tableDataSource", tableDataSource);

                JasperReport report = JasperCompileManager.compileReport(filePath);
                JasperPrint print = JasperFillManager.fillReport(report, parameters, new JREmptyDataSource());

                byte[] pdfBytes = JasperExportManager.exportReportToPdf(print);

                HttpHeaders headers = new HttpHeaders();
                headers.add(HttpHeaders.CONTENT_DISPOSITION, "inline;filename=facturaCompra.pdf");
                headers.add(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_PDF_VALUE);

                ByteArrayResource resource = new ByteArrayResource(pdfBytes);
                return ResponseEntity.ok()
                        .headers(headers)
                        .contentLength(pdfBytes.length)
                        .contentType(MediaType.APPLICATION_PDF)
                        .body(resource);
            } else {
                throw new ObjectNotFoundException("El carro de compras con el ID: " + idShoppingCart + " no existe");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Transactional(readOnly = true)
    @Override
    public ResponseEntity<Resource> salesGeneratedPDF(String year) {
        List<SalesEntity> salesEntityList = iSalesEntityRepository.findByYear(year);

        try {

            String filePath = "src" + File.separator +
                    "main" + File.separator +
                    "resources" +
                    File.separator +
                    "templates" +
                    File.separator +
                    "salesReport.jrxml";

            Map<String, Object> parameters = new HashMap<>();
            DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            LocalDate localDate = LocalDate.now();
            String date = localDate.format(dateFormatter);
            List<ReportSalesModel> reportSalesModels = new ArrayList<>();
            Double totalReport = 0D;

            if (!salesEntityList.isEmpty()) {

                for (SalesEntity sales: salesEntityList) {
                    ReportSalesModel reportSalesModel = new ReportSalesModel();
                    reportSalesModel.setCodeSale(sales.getId());
                    reportSalesModel.setNameClient(sales.getClient().getName());
                    reportSalesModel.setIdentification(sales.getClient().getIdentification());
                    reportSalesModel.setPaymentMethod(sales.getPaymentMethod());
                    reportSalesModel.setIdShoppingCart(sales.getShoppingCart().getId());
                    reportSalesModel.setDateSale(sales.getDate().format(dateFormatter));
                    reportSalesModel.setTotalSale(sales.getSaleAmount());

                    totalReport  += reportSalesModel.getTotalSale();
                    reportSalesModels.add(reportSalesModel);
                }

                Map<String, Integer> paymentMethodCount = new HashMap<>();
                for (SalesEntity sales : salesEntityList) {
                    String paymentMethod = sales.getPaymentMethod();
                    paymentMethodCount.put(paymentMethod, paymentMethodCount.getOrDefault(paymentMethod, 0) + 1);
                }
                String paymentMethodMoreUsed = Collections.max(paymentMethodCount.entrySet(), Map.Entry.comparingByValue()).getKey();

                Map<Long, Integer> productSaleCount = new HashMap<>();
                for (SalesEntity sales : salesEntityList) {
                    ShoppingCartEntity shoppingCart = sales.getShoppingCart();
                    if (shoppingCart != null) {
                        List<ProductEntity> products = shoppingCart.getProductEntities();
                        for (ProductEntity product : products) {
                            Long productId = product.getId();
                            productSaleCount.put(productId, productSaleCount.getOrDefault(productId, 0) + 1);
                        }
                    }
                }

                Long topSellingProductId = Collections.max(productSaleCount.entrySet(), Map.Entry.comparingByValue()).getKey();
                String topSellingProduct = iProductEntityRepository.findById(topSellingProductId).get().getName();

                JRBeanCollectionDataSource tableDataSource = new JRBeanCollectionDataSource(reportSalesModels);

                parameters.put("date", date);
                parameters.put("imgDir", "classpath:static/images/");
                parameters.put("paymentMethodMoreUsed", paymentMethodMoreUsed);
                parameters.put("topSellingProduct", topSellingProduct);
                parameters.put("totalReport", totalReport);
                parameters.put("tableDataSource", tableDataSource);

                JasperReport report = JasperCompileManager.compileReport(filePath);
                JasperPrint print = JasperFillManager.fillReport(report, parameters, new JREmptyDataSource());

                byte[] pdfBytes = JasperExportManager.exportReportToPdf(print);

                HttpHeaders headers = new HttpHeaders();
                headers.add(HttpHeaders.CONTENT_DISPOSITION, "inline;filename=reporteVentas.pdf");
                headers.add(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_PDF_VALUE);

                ByteArrayResource resource = new ByteArrayResource(pdfBytes);
                return ResponseEntity.ok()
                        .headers(headers)
                        .contentLength(pdfBytes.length)
                        .contentType(MediaType.APPLICATION_PDF)
                        .body(resource);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
