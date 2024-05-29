package com.karmelshoes.persistency.mappers;

import com.karmelshoes.domain.dto.ProductDto;
import com.karmelshoes.persistency.entity.ProductEntity;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface IProductMapper {

    @Mappings(value = {
            @Mapping(target = "id", source = "productDto.idProductDto"),
            @Mapping(target = "name", source = "productDto.nameProductDto"),
            @Mapping(target = "imgPath", source = "productDto.imgProductDto"),
            @Mapping(target = "productType", source = "productDto.productTypeProductDto"),
            @Mapping(target = "color", source = "productDto.colorProductDto"),
            @Mapping(target = "mark", source = "productDto.markProductDto"),
            @Mapping(target = "gender", source = "productDto.genderProductDto"),
            @Mapping(target = "model", source = "productDto.modelProductDto"),
            @Mapping(target = "price", source = "productDto.priceProductDto"),
            @Mapping(target = "sizes", source = "productDto.sizesProductDto"),
            @Mapping(target = "stock", source = "productDto.stockProductDto"),
            @Mapping(target = "description", source = "productDto.descriptionProductDto"),
            @Mapping(target = "code", source = "productDto.codeProductDto"),
            @Mapping(target = "status", source = "productDto.statusProductDto")
    })
    ProductEntity productDtoToProductEntity(ProductDto productDto);

    @InheritInverseConfiguration
    ProductDto productEntityToProductDto(ProductEntity productEntity);
}
