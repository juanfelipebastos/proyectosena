package com.karmelshoes.web.controller;

import com.karmelshoes.domain.dto.ShoppingCartDto;
import com.karmelshoes.domain.service.IShoppingCartService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shoppingCart")
@CrossOrigin(origins = "http://localhost:5173")
public class ShoppingCartController {

    private final IShoppingCartService iShoppingCartService;

    public ShoppingCartController(IShoppingCartService iShoppingCartService) {
        this.iShoppingCartService = iShoppingCartService;
    }
    @GetMapping("/getAll")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody List<ShoppingCartDto> getAll() {
        return iShoppingCartService.getAll();
    }

    @GetMapping("/getById/{id}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ShoppingCartDto getByIdShoppingCart(@PathVariable("id") Long id) {
        return iShoppingCartService.getByIdShoppingCart(id);
    }

    @PostMapping("/createShoppingCart/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public @ResponseBody ShoppingCartDto create(@PathVariable("id") Long id) {
        return iShoppingCartService.create(id);
    }

    @PutMapping("/addProduct/{shoppingCartId}/{productId}")
    @ResponseStatus(HttpStatus.OK)
    public void addProductToShoppingCart(@PathVariable("shoppingCartId") Long shoppingCartId, @PathVariable("productId") Long productId) {
        iShoppingCartService.addProductToCart(shoppingCartId, productId);
    }

    @PutMapping("/removeProduct/{shoppingCartId}/{productId}")
    @ResponseStatus(HttpStatus.OK)
    public void removeProductFromCart(@PathVariable("shoppingCartId") Long shoppingCartId, @PathVariable("productId") Long productId) {
        iShoppingCartService.removeProductFromCart(shoppingCartId, productId);
    }

    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteByIdShoppingCart(@PathVariable("id") Long id) {
        iShoppingCartService.deleteByIdShoppingCart(id);
    }
}
