package com.karmelshoes.persistency.errors.exception;

import org.springframework.dao.DataIntegrityViolationException;

public class DataIntegrityViolationExceptionPersonality extends DataIntegrityViolationException {
    public DataIntegrityViolationExceptionPersonality(String message) {
        super(message);
    }
}
