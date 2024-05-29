package com.karmelshoes.domain.service;

import com.karmelshoes.domain.dto.SalesDto;
import com.karmelshoes.persistency.entity.SalesEntity;
import net.sf.jasperreports.engine.JRException;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ISalesService {
    SalesDto create(SalesEntity sales, Long idShoppingCart);
    List<SalesDto> getAll();
    SalesDto getById(Long id);
    List<SalesDto> getByIdClient(Long id);
    List<SalesDto> getByDate(String dateString);
    List<SalesDto> getByPaymentMethod(String paymentMethod);
    SalesDto getByIdShoppingCart(Long id);
    ResponseEntity<Resource> invoiceGeneratedPDF(Long idShoppingCart);
    ResponseEntity<Resource> salesGeneratedPDF(String year);
}
