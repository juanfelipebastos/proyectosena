package com.karmelshoes.domain.service;

import com.karmelshoes.domain.dto.ProductDto;
import com.karmelshoes.domain.models.ProductResponseModel;
import com.karmelshoes.persistency.entity.ProductEntity;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public interface IProductService {
    List<ProductDto> getAll();
    ProductDto getById(Long id);
    ProductDto updateAllFields(Long id, ProductEntity product, MultipartFile img) throws IOException;
    void deleteById(Long id);
    Page<ProductDto> getAllProductPage(Integer page, Integer size);
    Page<ProductDto> getAllProductPageByName(Integer page, Integer size, String name);
    Page<ProductDto> getAllProductPageByMark(Integer page, Integer size, String mark);
    Page<ProductDto> getAllProductPageByModel(Integer page, Integer size, String model);
    Page<ProductDto> getAllProductPageByGender(Integer page, Integer size, String gender);
    Page<ProductDto> getAllProductPageByPrice(Integer page, Integer size, Double price);
    Page<ProductDto> getAllProductPageByProductType(Integer page, Integer size, String productType);
    Page<ProductDto> getAllProductPageByCode(Integer page, Integer size, String code);
    Page<ProductDto> getAllProductPageByStatus(Integer page, Integer size);
    Page<ProductDto> getAllProductPageByGenderByModelAndProductType(Integer page, Integer size, String gender, String model, String productType);
    ProductDto createProductImg(ProductEntity product, MultipartFile img);
    ResponseEntity<byte[]> getImgProductById(Long id) throws IOException;
}
