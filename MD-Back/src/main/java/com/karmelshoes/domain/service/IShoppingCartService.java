package com.karmelshoes.domain.service;

import com.karmelshoes.domain.dto.ShoppingCartDto;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface IShoppingCartService {
    List<ShoppingCartDto> getAll();
    ShoppingCartDto getByIdShoppingCart(Long id);
    void addProductToCart(Long shoppingCartId, Long productId);
    ShoppingCartDto create(Long id);
    void removeProductFromCart(Long shoppingCartId, Long productId);
    void deleteByIdShoppingCart(Long id);
}
