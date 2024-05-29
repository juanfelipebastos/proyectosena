package com.karmelshoes.domain.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.karmelshoes.persistency.entity.ColorEntity;

@Service
public interface IColorService {
    ColorEntity create(ColorEntity colorEntity);
    ResponseEntity<String> deleteByName(String name);
}
