package com.karmelshoes.web.controller;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.karmelshoes.domain.service.ISizeService;
import com.karmelshoes.persistency.entity.SizeEntity;

@RestController
@RequestMapping("/size")
@CrossOrigin(origins = "http://localhost:5173")
public class SizeController {
    
    private final ISizeService iSizeService;

    public SizeController(ISizeService iSizeService) {
        this.iSizeService = iSizeService;
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public @ResponseBody SizeEntity create(@Valid @RequestBody SizeEntity sizeEntity) {
        return iSizeService.create(sizeEntity);
    }

    @DeleteMapping("/delete/{size}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ResponseEntity<String> delete(@PathVariable("size") Integer size) {
        return iSizeService.deleteBySize(size);
    }
}
