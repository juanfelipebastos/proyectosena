package com.karmelshoes.persistency.mappers;

import com.karmelshoes.domain.dto.SalesDto;
import com.karmelshoes.persistency.entity.SalesEntity;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;


@Mapper(componentModel = "spring")
public interface ISalesMapper {
    @Mappings(value = {
            @Mapping(target = "id", source = "salesDto.idSalesDto"),
            @Mapping(target = "client", source = "salesDto.clientSalesDto"),
            @Mapping(target = "saleAmount", source = "salesDto.saleAmountSalesDto"),
            @Mapping(target = "date", source = "salesDto.dateSalesDto"),
            @Mapping(target = "paymentMethod", source = "salesDto.paymentMethodSalesDto"),
            @Mapping(target = "shoppingCart", source = "salesDto.shoppingCartSalesDto")
    })
    SalesEntity salesDtoToSalesEntity(SalesDto salesDto);

    @InheritInverseConfiguration
    SalesDto salesEntityToSalesDto(SalesEntity salesEntity);
}
