package com.karmelshoes.domain.dto;

import com.karmelshoes.persistency.entity.ProductEntity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ShoppingCartDto {

    private Long idShoppingCartDto;
    private Map<ProductEntity, Integer> cartItemsShoppingCartDto = new HashMap<>();
    private Double totalPriceShoppingCartDto;
    private List<ProductEntity> productEntitiesShoppingCartDto = new ArrayList<>();

    public Long getIdShoppingCartDto() {
        return idShoppingCartDto;
    }

    public void setIdShoppingCartDto(Long idShoppingCartDto) {
        this.idShoppingCartDto = idShoppingCartDto;
    }

    public Map<ProductEntity, Integer> getCartItemsShoppingCartDto() {
        return cartItemsShoppingCartDto;
    }

    public void setCartItemsShoppingCartDto(Map<ProductEntity, Integer> cartItemsShoppingCartDto) {
        this.cartItemsShoppingCartDto = cartItemsShoppingCartDto;
    }

    public Double getTotalPriceShoppingCartDto() {
        return totalPriceShoppingCartDto;
    }

    public void setTotalPriceShoppingCartDto(Double totalPriceShoppingCartDto) {
        this.totalPriceShoppingCartDto = totalPriceShoppingCartDto;
    }

    public List<ProductEntity> getProductEntitiesShoppingCartDto() {
        return productEntitiesShoppingCartDto;
    }

    public void setProductEntitiesShoppingCartDto(List<ProductEntity> productEntitiesShoppingCartDto) {
        this.productEntitiesShoppingCartDto = productEntitiesShoppingCartDto;
    }
}
