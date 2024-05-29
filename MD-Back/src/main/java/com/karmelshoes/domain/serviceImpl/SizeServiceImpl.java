package com.karmelshoes.domain.serviceImpl;

import java.util.Optional;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.karmelshoes.domain.service.ISizeService;
import com.karmelshoes.persistency.entity.SizeEntity;
import com.karmelshoes.persistency.errors.exception.DataIntegrityViolationExceptionPersonality;
import com.karmelshoes.persistency.errors.exception.ObjectNotFoundException;
import com.karmelshoes.persistency.repository.ISizeRepository;

@Service
public class SizeServiceImpl implements ISizeService {

    private final ISizeRepository iSizeRepository;

    public SizeServiceImpl(ISizeRepository iSizeRepository) {
        this.iSizeRepository = iSizeRepository;
    }

    @Override
    public SizeEntity create(SizeEntity sizeEntity) {
        try {
            return iSizeRepository.save(sizeEntity);
        } catch (DataIntegrityViolationException e) {
            throw new DataIntegrityViolationExceptionPersonality(
                    "No se puede crear la talla por que " + sizeEntity.getSize() + " ya existe");
        }
    }

    @Override
    public ResponseEntity<String> deleteBySize(Integer size) {
        Optional<SizeEntity> optionalSizeEntity = iSizeRepository.findBySize(size);

        if (optionalSizeEntity.isPresent()) {
            iSizeRepository.deleteById(optionalSizeEntity.get().getId());
            return new ResponseEntity<>("Se Ha Eliminado Correcatemnte", HttpStatus.OK);
        } else {
            throw new ObjectNotFoundException("La talla: " + size + " No existe");
        }
    } 
}
