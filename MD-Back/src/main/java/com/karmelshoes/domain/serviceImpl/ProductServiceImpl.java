package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.dto.ProductDto;
import com.karmelshoes.domain.service.IProductService;
import com.karmelshoes.persistency.entity.ProductEntity;
import com.karmelshoes.persistency.errors.exception.DataIntegrityViolationExceptionPersonality;
import com.karmelshoes.persistency.errors.exception.IllegalArgumentExceptionData;
import com.karmelshoes.persistency.errors.exception.ObjectNotFoundException;
import com.karmelshoes.persistency.mappers.IProductMapper;
import com.karmelshoes.persistency.repository.IProductEntityRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements IProductService {

    private final IProductEntityRepository iProductEntityRepository;
    private final IProductMapper iProductMapper;

    public ProductServiceImpl(IProductEntityRepository iProductEntityRepository, IProductMapper iProductMapper) {
        this.iProductEntityRepository = iProductEntityRepository;
        this.iProductMapper = iProductMapper;
    }

    @Transactional(readOnly = true)
    @Override
    public List<ProductDto> getAll() {
        return iProductEntityRepository.findAll()
                .stream().map(iProductMapper::productEntityToProductDto)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    @Override
    public ProductDto getById(Long id) {
        Optional<ProductEntity> productEntityOptional = iProductEntityRepository.findById(id);
        if (productEntityOptional.isPresent()) {
            return iProductMapper.productEntityToProductDto(productEntityOptional.get());
        }
        throw new ObjectNotFoundException("Producto no encontrado con el ID:" + id);
    }

    @Transactional(readOnly = false)
    @Override
    public ProductDto updateAllFields(Long id, ProductEntity product, MultipartFile img) throws IOException {
        Optional<ProductEntity> productEntityOptional = iProductEntityRepository.findById(id);
        if (productEntityOptional.isPresent()) {
            ProductEntity productEntity = productEntityOptional.get();
            Optional<ProductEntity> productEntityCode = iProductEntityRepository.findByCode(product.getCode());
            if (productEntityCode.isPresent() && !Objects.equals(productEntity.getId(), productEntityCode.get().getId())) {
                throw new DataIntegrityViolationExceptionPersonality("El campo code: " + product.getCode() + " ya existe");
            } else {
                productEntity.setName(product.getName());
                productEntity.setProductType(product.getProductType());
                productEntity.setPrice(product.getPrice());
                productEntity.setDescription(product.getDescription());
                productEntity.setColor(product.getColor());
                productEntity.setMark(product.getMark());
                productEntity.setModel(product.getModel());
                productEntity.setSizes(product.getSizes());
                productEntity.setStock(product.getStock());
                if(img.isEmpty()){
                    productEntity.setImgPath(productEntityOptional.get().getImgPath());
                } else {
                    saveImgPath(productEntity, img);
                }
                productEntity.setGender(product.getGender());
                productEntity.setCode(product.getCode());
                return iProductMapper.productEntityToProductDto(iProductEntityRepository.save(productEntity));
            }
        }
        throw new ObjectNotFoundException("Producto no encontrado con el ID:" + id);
    }

    @Transactional(readOnly = false)
    @Override
    public void deleteById(Long id) {
        Optional<ProductEntity> productEntityOptional = iProductEntityRepository.findById(id);
        if (productEntityOptional.isPresent()) {
            productEntityOptional.get().setStatus(false);
            iProductEntityRepository.save(productEntityOptional.get());
        } else {
            throw new ObjectNotFoundException("Producto no encontrado con el ID:" + id);
        }
    }

    @Override
    public Page<ProductDto> getAllProductPage(Integer page, Integer size) {
        final Pageable pageable = PageRequest.of(page, size);
        return iProductEntityRepository.findByStatusTrue(pageable).map(iProductMapper::productEntityToProductDto);
    }

    @Override
    public Page<ProductDto> getAllProductPageByName(Integer page, Integer size, String name) {
        final Pageable pageable = PageRequest.of(page, size);
        return iProductEntityRepository.findByStatusTrueAndNameContainingIgnoreCase(pageable, name).map(iProductMapper::productEntityToProductDto);
    }

    @Override
    public Page<ProductDto> getAllProductPageByMark(Integer page, Integer size, String mark) {
        final Pageable pageable = PageRequest.of(page, size);
        return iProductEntityRepository.findByStatusTrueAndMarkContainingIgnoreCase(pageable, mark).map(iProductMapper::productEntityToProductDto);
    }

    @Override
    public Page<ProductDto> getAllProductPageByModel(Integer page, Integer size, String model) {
        final Pageable pageable = PageRequest.of(page, size);
        return iProductEntityRepository.findByStatusTrueAndModelContainingIgnoreCase(pageable, model).map(iProductMapper::productEntityToProductDto);
    }

    @Override
    public Page<ProductDto> getAllProductPageByGender(Integer page, Integer size, String gender) {
        final Pageable pageable = PageRequest.of(page, size);
        return iProductEntityRepository.findByStatusTrueAndGenderContainingIgnoreCase(pageable, gender).map(iProductMapper::productEntityToProductDto);
    }

    @Override
    public Page<ProductDto> getAllProductPageByPrice(Integer page, Integer size, Double price) {
        final Pageable pageable = PageRequest.of(page, size);
        return iProductEntityRepository.findByStatusTrueAndPrice(pageable, price).map(iProductMapper::productEntityToProductDto);
    }

    @Override
    public Page<ProductDto> getAllProductPageByProductType(Integer page, Integer size, String productType) {
        final Pageable pageable = PageRequest.of(page, size);
        return iProductEntityRepository.findByStatusTrueAndProductTypeContainingIgnoreCase(pageable, productType).map(iProductMapper::productEntityToProductDto);
    }

    @Override
    public Page<ProductDto> getAllProductPageByCode(Integer page, Integer size, String code) {
        final Pageable pageable = PageRequest.of(page, size);
        return iProductEntityRepository.findByStatusTrueAndCodeContainingIgnoreCase(pageable, code).map(iProductMapper::productEntityToProductDto);
    }

    @Override
    public Page<ProductDto> getAllProductPageByStatus(Integer page, Integer size) {
        final Pageable pageable = PageRequest.of(page, size);
        return iProductEntityRepository.findByStatusFalse(pageable).map(iProductMapper::productEntityToProductDto);
    }

    @Override
    public Page<ProductDto> getAllProductPageByGenderByModelAndProductType(Integer page, Integer size, String gender, String model, String productType) {
        final Pageable pageable = PageRequest.of(page, size);
        return iProductEntityRepository.findByStatusTrueAndGenderContainingIgnoreCaseAndModelContainingIgnoreCaseAndProductTypeContainingIgnoreCase(pageable, gender, model, productType).map(iProductMapper::productEntityToProductDto);
    }


    @Transactional(readOnly = false)
    @Override
    public ProductDto createProductImg(ProductEntity productEntity, MultipartFile img) {
        try {
            if (productEntity != null) {
                Optional<ProductEntity> existingProduct = iProductEntityRepository.findByCode(productEntity.getCode());
                if (existingProduct.isPresent()) {
                    throw new DataIntegrityViolationExceptionPersonality("El campo code: " + productEntity.getCode() + " ya existe");
                }

                productEntity.setStatus(true);
                saveImgPath(productEntity, img);
                ProductEntity savedProduct = iProductEntityRepository.save(productEntity);
                return iProductMapper.productEntityToProductDto(savedProduct);
            } else {
                throw new IllegalArgumentExceptionData("El producto es null");
            }
        } catch (Exception exception) {
            throw new RuntimeException("Error al crear el producto: " + exception.getMessage(), exception);
        }
    }

    @Transactional(readOnly = true)
    @Override
    public ResponseEntity<byte[]> getImgProductById(Long id) throws IOException {
        Optional<ProductEntity> productEntityOptional = iProductEntityRepository.findById(id);
        if (productEntityOptional.isPresent()) {
            String imgPath = productEntityOptional.get().getImgPath();
            byte[] imgBytes = Files.readAllBytes(new File(imgPath).toPath());

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(getImageMediaType(imgPath));
            return new ResponseEntity<>(imgBytes, headers, HttpStatus.OK);
        }
        throw new ObjectNotFoundException("Producto no encontrado con el ID:" + id);
    }

    private MediaType getImageMediaType(String imagePath) throws IllegalArgumentExceptionData {
        String extension = getExtension(imagePath);

        return switch (extension) {
            case "png" -> MediaType.IMAGE_PNG;
            case "jpg", "jpeg" -> MediaType.IMAGE_JPEG;
            case "gif" -> MediaType.IMAGE_GIF;
            case "bmp" -> MediaType.parseMediaType("image/bmp");
            case "tiff", "tif" -> MediaType.parseMediaType("image/tiff");
            case "webp" -> MediaType.parseMediaType("image/webp");
            case "jp2" -> MediaType.parseMediaType("image/jp2");
            case "jxr", "hdp" -> MediaType.parseMediaType("image/vnd.ms-photo");
            case "heif", "heic" -> MediaType.parseMediaType("image/heif");
            case "svg" -> MediaType.parseMediaType("image/svg+xml");
            default -> throw new IllegalArgumentExceptionData("lo siento pero no se puede procesar la imagen");
        };
    }

    private static String getExtension(String filePath) throws IllegalArgumentExceptionData {
        File file = new File(filePath);
        String fileName = file.getName();
        int dotIndex = fileName.lastIndexOf('.');
        if (dotIndex > 0 && dotIndex < fileName.length() - 1) {
            return fileName.substring(dotIndex + 1).toLowerCase();
        }
        throw new IllegalArgumentExceptionData("lo siento pero no se puede procesar la imagen");
    }

    private void saveImgPath(ProductEntity productEntity, MultipartFile img) throws IOException {
        final String FOLDER_NAME = "images";
        final String FOLDER_PATH = System.getProperty("user.home") + File.separator + "Desktop" + File.separator + "copia-seguridad" + File.separator + FOLDER_NAME;


        validateImage(img);

        File folder = new File(FOLDER_PATH);
        if (!folder.exists()) {
            folder.mkdirs();
        }

        String path = FOLDER_PATH + File.separator + img.getOriginalFilename();
        Optional<ProductEntity> existingProductPath = iProductEntityRepository.findByImgPath(path);

        if (existingProductPath.isPresent() && !existingProductPath.get().getId().equals(productEntity.getId())) {
            throw new IllegalArgumentExceptionData("la imagen ya existe");
        }

        productEntity.setImgPath(path);
        img.transferTo(new File(path));
    }

    private void validateImage(MultipartFile img) throws IOException {
        long fileSize = img.getSize();
        long maxFileSize = 5 * 1024 * 1024;

        if (img.isEmpty()) {
            throw new IllegalArgumentExceptionData("El campo img no puede ser null o estar vacio");
        }

        if (fileSize > maxFileSize) {
            throw new IllegalArgumentExceptionData("La imagen debe ser un tamaño igual o menos a 5MB");
        }

        String fileOriginalName = img.getOriginalFilename();
        if (fileOriginalName != null && !isValidImageExtension(fileOriginalName)) {
            throw new IllegalArgumentExceptionData("Solo se permiten archivos de tipo imagen (jpg, jpeg, png, gif, bmp, tiff, webp, jp2, jxr, hdp, heif, heic, svg)");
        }
    }

    private boolean isValidImageExtension(String fileName) {
        List<String> allowedExtensions = Arrays.asList(
                ".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".tif", ".webp",
                ".jp2", ".jxr", ".hdp", ".heif", ".heic", ".svg"
        );
        String fileExtension = fileName.substring(fileName.lastIndexOf("."));
        return allowedExtensions.contains(fileExtension.toLowerCase());
    }
}
