package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.models.ModelColorsSizes;
import com.karmelshoes.domain.service.IModelColorsSizesService;
import com.karmelshoes.persistency.entity.ColorEntity;
import com.karmelshoes.persistency.entity.SizeEntity;
import com.karmelshoes.persistency.repository.IColorRepository;
import com.karmelshoes.persistency.repository.ISizeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ModelColorsSizesServiceImpl implements IModelColorsSizesService {

    private final IColorRepository iColorRepository;
    private final ISizeRepository iSizeRepository;

    public ModelColorsSizesServiceImpl(IColorRepository iColorRepository, ISizeRepository iSizeRepository) {
        this.iColorRepository = iColorRepository;
        this.iSizeRepository = iSizeRepository;
    }

    @Transactional(readOnly = true)
    @Override
    public ModelColorsSizes getData() {
        ModelColorsSizes modelColorsSizes = new ModelColorsSizes();

        List<ColorEntity> colorEntityList = iColorRepository.findAll();
        List<SizeEntity> sizeEntityList = iSizeRepository.findAll();

        modelColorsSizes.setColorList(colorEntityList);
        modelColorsSizes.setSizeList(sizeEntityList);
        return modelColorsSizes;
    }
}
