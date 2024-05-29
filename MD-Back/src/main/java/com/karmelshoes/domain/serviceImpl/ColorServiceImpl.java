package com.karmelshoes.domain.serviceImpl;

import java.util.Optional;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.karmelshoes.domain.service.IColorService;
import com.karmelshoes.persistency.entity.ColorEntity;
import com.karmelshoes.persistency.errors.exception.DataIntegrityViolationExceptionPersonality;
import com.karmelshoes.persistency.errors.exception.ObjectNotFoundException;
import com.karmelshoes.persistency.repository.IColorRepository;

@Service
public class ColorServiceImpl implements IColorService {

    private final IColorRepository iColorRepository;

    public ColorServiceImpl(IColorRepository iColorRepository) {
        this.iColorRepository = iColorRepository;
    }

    @Override
    public ColorEntity create(ColorEntity colorEntity) {
        try {
            return iColorRepository.save(colorEntity);
        } catch (DataIntegrityViolationException e) {
            throw new DataIntegrityViolationExceptionPersonality(
                    "No se puede crear el color por que " + colorEntity.getName() + " ya existen");
        }
    }

    @Override
    public ResponseEntity<String> deleteByName(String name) {
        Optional<ColorEntity> optionalColorEntity = iColorRepository.findByName(name);
        if (optionalColorEntity.isPresent()) {
            iColorRepository.deleteById(optionalColorEntity.get().getId());
            return new ResponseEntity<>("Eliminado Correctamente", HttpStatus.OK);
        } else {
            throw new ObjectNotFoundException("El Color Con El Nombre: " + name + " No existe");
        }
    }

}
