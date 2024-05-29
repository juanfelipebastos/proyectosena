package com.karmelshoes.persistency.validation;

import com.karmelshoes.persistency.entity.ClientEntity;
import com.karmelshoes.persistency.repository.IShoppingCartRepository;

public class ValidationLogic {

    public static Boolean validateIsClientDelete(ClientEntity client) {
        return Boolean.TRUE.equals(client.getStatus());
    }

    public static Boolean validateIsUsedInSale(IShoppingCartRepository iShoppingCartRepository, Long shoppingCartId) {
        return iShoppingCartRepository.isShoppingCartUsedInSale(shoppingCartId);
    }

}
