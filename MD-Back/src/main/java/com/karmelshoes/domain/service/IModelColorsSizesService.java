package com.karmelshoes.domain.service;

import com.karmelshoes.domain.models.ModelColorsSizes;
import org.springframework.stereotype.Service;

@Service
public interface IModelColorsSizesService {

    ModelColorsSizes getData();
}
