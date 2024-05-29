package com.karmelshoes.domain.models;

public class ReportSalesModel {

    private Long codeSale;
    private String nameClient;
    private String identification;
    private String paymentMethod;
    private Long idShoppingCart;
    private String dateSale;
    private Double totalSale;

    public Long getCodeSale() {
        return codeSale;
    }

    public void setCodeSale(Long codeSale) {
        this.codeSale = codeSale;
    }

    public String getNameClient() {
        return nameClient;
    }

    public void setNameClient(String nameClient) {
        this.nameClient = nameClient;
    }

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public Long getIdShoppingCart() {
        return idShoppingCart;
    }

    public void setIdShoppingCart(Long idShoppingCart) {
        this.idShoppingCart = idShoppingCart;
    }

    public String getDateSale() {
        return dateSale;
    }

    public void setDateSale(String dateSale) {
        this.dateSale = dateSale;
    }

    public Double getTotalSale() {
        return totalSale;
    }

    public void setTotalSale(Double totalSale) {
        this.totalSale = totalSale;
    }
}
