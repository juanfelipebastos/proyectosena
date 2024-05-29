package com.karmelshoes.domain.models;

import com.karmelshoes.domain.dto.ProductDto;

public class ProductResponseModel {

    ProductDto productEntity;
    String urlImg;

    public ProductDto getProductEntity() {
        return productEntity;
    }

    public void setProductEntity(ProductDto productEntity) {
        this.productEntity = productEntity;
    }

    public String getUrlImg() {
        return urlImg;
    }

    public void setUrlImg(String urlImg) {
        this.urlImg = urlImg;
    }
}
