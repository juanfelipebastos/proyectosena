package com.karmelshoes.domain.dto;

import com.karmelshoes.persistency.entity.ClientEntity;
import com.karmelshoes.persistency.entity.ShoppingCartEntity;

import java.time.LocalDate;

public class SalesDto {

    private Long idSalesDto;
    private Double saleAmountSalesDto;
    private LocalDate dateSalesDto;
    private String paymentMethodSalesDto;
    private ShoppingCartEntity shoppingCartSalesDto;
    private ClientEntity clientSalesDto;

    public ShoppingCartEntity getShoppingCartSalesDto() {
        return shoppingCartSalesDto;
    }

    public void setShoppingCartSalesDto(ShoppingCartEntity shoppingCartSalesDto) {
        this.shoppingCartSalesDto = shoppingCartSalesDto;
    }

    public ClientEntity getClientSalesDto() {
        return clientSalesDto;
    }

    public void setClientSalesDto(ClientEntity clientSalesDto) {
        this.clientSalesDto = clientSalesDto;
    }

    public Long getIdSalesDto() {
        return idSalesDto;
    }

    public void setIdSalesDto(Long idSalesDto) {
        this.idSalesDto = idSalesDto;
    }

    public Double getSaleAmountSalesDto() {
        return saleAmountSalesDto;
    }

    public void setSaleAmountSalesDto(Double saleAmountSalesDto) {
        this.saleAmountSalesDto = saleAmountSalesDto;
    }

    public LocalDate getDateSalesDto() {
        return dateSalesDto;
    }

    public void setDateSalesDto(LocalDate dateSalesDto) {
        this.dateSalesDto = dateSalesDto;
    }

    public String getPaymentMethodSalesDto() {
        return paymentMethodSalesDto;
    }

    public void setPaymentMethodSalesDto(String paymentMethodSalesDto) {
        this.paymentMethodSalesDto = paymentMethodSalesDto;
    }
}
