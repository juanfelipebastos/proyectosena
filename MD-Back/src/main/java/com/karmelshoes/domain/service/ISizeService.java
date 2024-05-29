package com.karmelshoes.domain.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.karmelshoes.persistency.entity.SizeEntity;

@Service
public interface ISizeService {
    SizeEntity create(SizeEntity sizeEntity);
    ResponseEntity<String> deleteBySize(Integer size);
}
