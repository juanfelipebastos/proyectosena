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

import com.karmelshoes.domain.service.IColorService;
import com.karmelshoes.persistency.entity.ColorEntity;

@RestController
@RequestMapping("/color")
@CrossOrigin(origins = "http://localhost:5173")
public class ColorController {
    
    private final IColorService iColorService;

    public ColorController(IColorService iColorService) {
        this.iColorService = iColorService;
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public @ResponseBody ColorEntity create(@Valid @RequestBody ColorEntity colorEntity) {
        return iColorService.create(colorEntity);
    }

    @DeleteMapping("/delete/{name}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ResponseEntity<String> delete(@PathVariable("name") String name) {
        return iColorService.deleteByName(name);
    }
}
