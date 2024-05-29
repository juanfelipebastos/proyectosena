package com.karmelshoes.domain.models;

public class ReportInvoiceModel {
    private Long productId;
    private String productName;
    private String model;
    private Integer quantity;
    private Double priceUnitary;
    private Double totalProductPrice;

    private String codeProduct;

    public String getCodeProduct() {
        return codeProduct;
    }

    public void setCodeProduct(String codeProduct) {
        this.codeProduct = codeProduct;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getPriceUnitary() {
        return priceUnitary;
    }

    public void setPriceUnitary(Double priceUnitary) {
        this.priceUnitary = priceUnitary;
    }

    public Double getTotalProductPrice() {
        return totalProductPrice;
    }

    public void setTotalProductPrice(Double totalProductPrice) {
        this.totalProductPrice = totalProductPrice;
    }

    @Override
    public String toString() {
        return "ReportInvoiceModel{" +
                "productId=" + productId +
                ", productName='" + productName + '\'' +
                ", model='" + model + '\'' +
                ", quantity=" + quantity +
                ", priceUnitary=" + priceUnitary +
                ", totalProductPrice=" + totalProductPrice +
                '}';
    }
}
