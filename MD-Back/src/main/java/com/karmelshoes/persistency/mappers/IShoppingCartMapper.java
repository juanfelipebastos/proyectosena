package com.karmelshoes.persistency.mappers;

import com.karmelshoes.domain.dto.ShoppingCartDto;
import com.karmelshoes.persistency.entity.ShoppingCartEntity;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface IShoppingCartMapper {
    @Mappings(value = {
            @Mapping(target = "id", source = "shoppingCartDto.idShoppingCartDto"),
            @Mapping(target = "cartItems", source = "shoppingCartDto.cartItemsShoppingCartDto"),
            @Mapping(target = "productEntities", source = "shoppingCartDto.productEntitiesShoppingCartDto"),
            @Mapping(target = "totalPrice", source = "shoppingCartDto.totalPriceShoppingCartDto")
    })
    ShoppingCartEntity shoppingCartDtoToShoppingCartEntity(ShoppingCartDto shoppingCartDto);

    @InheritInverseConfiguration
    ShoppingCartDto shoppingCartEntityToShoppingCartDto(ShoppingCartEntity shoppingCartEntity);
}
