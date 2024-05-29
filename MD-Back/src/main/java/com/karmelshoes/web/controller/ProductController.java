package com.karmelshoes.web.controller;

import com.karmelshoes.domain.dto.ProductDto;
import com.karmelshoes.domain.models.ProductResponseModel;
import com.karmelshoes.domain.service.IProductService;
import com.karmelshoes.persistency.entity.ProductEntity;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final IProductService iProductService;

    public ProductController(IProductService iProductService) {
        this.iProductService = iProductService;
    }

    @GetMapping("/getAll")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody List<ProductDto> getAll() {
        return iProductService.getAll();
    }

    @GetMapping("/getAllProductPage/{page}/{size}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ProductDto> getAllProductPage(@PathVariable("page") Integer page, @PathVariable("size") Integer size){
        return iProductService.getAllProductPage(page, size);
    }

    @GetMapping("/getAllProductPageByName/{page}/{size}/{name}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ProductDto> getAllProductPageByName(
                @PathVariable("page") Integer page,
                @PathVariable("size") Integer size,
                @PathVariable("name") String name
            ){
        return iProductService.getAllProductPageByName(page, size, name);
    }

    @GetMapping("/getAllProductPageByMark/{page}/{size}/{mark}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ProductDto> getAllProductPageByMark(
            @PathVariable("page") Integer page,
            @PathVariable("size") Integer size,
            @PathVariable("mark") String mark
    ){
        return iProductService.getAllProductPageByMark(page, size, mark);
    }

    @GetMapping("/getAllProductPageByModel/{page}/{size}/{model}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ProductDto> getAllProductPageByModel(
            @PathVariable("page") Integer page,
            @PathVariable("size") Integer size,
            @PathVariable("model") String model
    ){
        return iProductService.getAllProductPageByModel(page, size, model);
    }

    @GetMapping("/getAllProductPageByGender/{page}/{size}/{gender}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ProductDto> getAllProductPageByGender(
            @PathVariable("page") Integer page,
            @PathVariable("size") Integer size,
            @PathVariable("gender") String gender
    ){
        return iProductService.getAllProductPageByGender(page, size, gender);
    }

    @GetMapping("/getAllProductPageByPrice/{page}/{size}/{price}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ProductDto> getAllProductPageByPrice(
            @PathVariable("page") Integer page,
            @PathVariable("size") Integer size,
            @PathVariable("price") Double price
    ){
        return iProductService.getAllProductPageByPrice(page, size, price);
    }

    @GetMapping("/getAllProductPageByProductType/{page}/{size}/{productType}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ProductDto> getAllProductPageByProductType(
            @PathVariable("page") Integer page,
            @PathVariable("size") Integer size,
            @PathVariable("productType") String productType
    ){
        return iProductService.getAllProductPageByProductType(page, size, productType);
    }

    @GetMapping("/getAllProductPageByCode/{page}/{size}/{code}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ProductDto> getAllProductPageByCode(
            @PathVariable("page") Integer page,
            @PathVariable("size") Integer size,
            @PathVariable("code") String code
    ){
        return iProductService.getAllProductPageByCode(page, size, code);
    }

    @GetMapping("/getAllProductPageByStatusFalse/{page}/{size}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ProductDto> getAllProductPageByStatus(
            @PathVariable("page") Integer page,
            @PathVariable("size") Integer size
    ){
        return iProductService.getAllProductPageByStatus(page, size);
    }

    @GetMapping("/getAllProductPageByGenderByModelAndProductType/{page}/{size}/{gender}/{model}/{productType}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ProductDto> getAllProductPageByGenderByModelAndProductType(
            @PathVariable("page") Integer page,
            @PathVariable("size") Integer size,
            @PathVariable("gender") String gender,
            @PathVariable("model") String model,
            @PathVariable("productType") String productType
    ){
        return iProductService.getAllProductPageByGenderByModelAndProductType(page, size, gender, model, productType);
    }



    @GetMapping("/getById/{id}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ProductDto getById(@PathVariable("id") Long id) {
        return iProductService.getById(id);
    }

    @PutMapping("/update/{id}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ProductDto updateAll(@PathVariable("id") Long id, @Valid
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("price") Double price,
            @RequestParam("status") Boolean status,
            @RequestParam("stock") Integer stock,
            @RequestParam("productType") String productType,
            @RequestParam("mark") String mark,
            @RequestParam("model") String model,
            @RequestParam("sizes") List<Integer> sizes,
            @RequestParam("color") List<String> color,
            @RequestParam("gender") String gender,
            @RequestParam("code") String code,
            @RequestParam("img") MultipartFile img
    ) throws IOException {

        ProductEntity product = new ProductEntity();
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);
        product.setStatus(status);
        product.setStock(stock);
        product.setProductType(productType);
        product.setMark(mark);
        product.setModel(model);
        product.setSizes(sizes);
        product.setColor(color);
        product.setGender(gender);
        product.setImgPath(null);
        product.setCode(code);
        return iProductService.updateAllFields(id, product, img);
    }

    @PatchMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteById(@PathVariable("id") Long id) {
        iProductService.deleteById(id);
    }

    @PostMapping( value = "/createProductImg")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ProductDto createProductImg(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("price") Double price,
            @RequestParam("status") Boolean status,
            @RequestParam("stock") Integer stock,
            @RequestParam("productType") String productType,
            @RequestParam("mark") String mark,
            @RequestParam("model") String model,
            @RequestParam("sizes") List<Integer> sizes,
            @RequestParam("color") List<String> color,
            @RequestParam("gender") String gender,
            @RequestParam("img") MultipartFile img,
            @RequestParam("code") String code
    ) {
        ProductEntity product = new ProductEntity();
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);
        product.setStatus(status);
        product.setStock(stock);
        product.setProductType(productType);
        product.setMark(mark);
        product.setModel(model);
        product.setSizes(sizes);
        product.setColor(color);
        product.setGender(gender);
        product.setCode(code);
        System.out.println("product: " + product);
        System.out.println("img: " + img);
	    return iProductService.createProductImg(product, img);
    }

    @GetMapping("/getImgProductById/{id}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ResponseEntity<byte[]> getImgProductById(@PathVariable("id") Long id) throws IOException {
        return iProductService.getImgProductById(id);
    }
}
