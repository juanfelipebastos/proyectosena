package com.karmelshoes.web.controller;

import com.karmelshoes.domain.dto.SalesDto;
import com.karmelshoes.domain.service.ISalesService;
import com.karmelshoes.persistency.entity.SalesEntity;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sales")
@CrossOrigin(origins = "http://localhost:5173")
public class SalesController {

    private final ISalesService iSalesService;

    public SalesController(ISalesService iSalesService) {
        this.iSalesService = iSalesService;
    }

    @GetMapping("/getAll")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody List<SalesDto> getAll() {
        return iSalesService.getAll();
    }

    @GetMapping("/getById/{id}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody SalesDto getById(@PathVariable("id") Long id) {
        return iSalesService.getById(id);
    }

    @GetMapping("/getByIdClient/{id}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody List<SalesDto> getByIdClient(@PathVariable("id") Long id) {
        return iSalesService.getByIdClient(id);
    }

    @GetMapping("/getByDate/{dateString}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody List<SalesDto> getByDate(@PathVariable("dateString") String dateString) {
        return iSalesService.getByDate(dateString);
    }

    @GetMapping("/getByPaymentMethod/{paymentMethod}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody List<SalesDto> getByPaymentMethod(@PathVariable("paymentMethod") String paymentMethod) {
        return iSalesService.getByPaymentMethod(paymentMethod);
    }

    @PostMapping("/create/{idShoppingCart}")
    @ResponseStatus(HttpStatus.CREATED)
    public @ResponseBody SalesDto create(@RequestBody SalesEntity sales, @PathVariable("idShoppingCart") Long idShoppingCart) {
        return iSalesService.create(sales, idShoppingCart);
    }
    @GetMapping("/getByIdShoppingCart/{id}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody SalesDto getByIdShoppingCart(@PathVariable("id") Long id) {
        return iSalesService.getByIdShoppingCart(id);
    }
    @GetMapping("/invoiceGeneratedPDF/{idShoppingCart}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ResponseEntity<Resource> invoiceGeneratedPDF(@PathVariable("idShoppingCart") Long idShoppingCart) {
        return iSalesService.invoiceGeneratedPDF(idShoppingCart);
    }

    @GetMapping("/salesGeneratedPDF/{year}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ResponseEntity<Resource> salesGeneratedPDF(@PathVariable("year") String year) {
        return iSalesService.salesGeneratedPDF(year);
    }
}
