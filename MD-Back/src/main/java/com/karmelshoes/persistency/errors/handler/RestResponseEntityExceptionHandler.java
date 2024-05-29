package com.karmelshoes.persistency.errors.handler;

import com.karmelshoes.persistency.errors.ResponseErrors;
import com.karmelshoes.persistency.errors.exception.*;
import jakarta.validation.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {


    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        Map<String, Object> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error -> errors.put(error.getField(), error.getDefaultMessage()));
        ResponseErrors responseErrors = new ResponseErrors(status, "Invalida peticion, error en los campos", errors, status.value());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseErrors);
    }

    @ExceptionHandler(ObjectNotFoundException.class)
    public ResponseEntity<ResponseErrors> handleClientNotFoundException(ObjectNotFoundException ex) {
        ResponseErrors responseErrors = new ResponseErrors(HttpStatus.NOT_FOUND, ex.getMessage(), null, HttpStatus.NOT_FOUND.value());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseErrors);
    }

    @ExceptionHandler({DataIntegrityViolationException.class, DataIntegrityViolationExceptionPersonality.class})
    public ResponseEntity<ResponseErrors> handleValidationExceptions(DataIntegrityViolationException ex, DataIntegrityViolationExceptionPersonality exceptionPersonality) {
        ResponseErrors errors = new ResponseErrors(HttpStatus.BAD_REQUEST, exceptionPersonality.getMessage(), null, HttpStatus.BAD_REQUEST.value());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
    }


    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ResponseErrors> handleConstraintViolationException(ConstraintViolationException exception) {
        Map<String, Object> errors = new HashMap<>();
        exception.getConstraintViolations().forEach(constraintViolation -> errors.put(constraintViolation.getPropertyPath().toString(), constraintViolation.getMessage()));
        ResponseErrors responseErrors = new ResponseErrors(HttpStatus.BAD_REQUEST, "Invalida peticion, error en el campo", errors, HttpStatus.BAD_REQUEST.value());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseErrors);
    }

    @ExceptionHandler(ClientIsEliminatedException.class)
    public ResponseEntity<ResponseErrors> handleClientIsEliminatedException(ClientIsEliminatedException exception) {
        ResponseErrors responseErrors = new ResponseErrors(HttpStatus.BAD_REQUEST, exception.getMessage(), null, HttpStatus.BAD_REQUEST.value());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseErrors);
    }

    @ExceptionHandler(ShoppingCartAssociatedWithSaleException.class)
    public ResponseEntity<ResponseErrors> handleShoppingCartAssociatedWithSaleException(ShoppingCartAssociatedWithSaleException exception) {
        ResponseErrors responseErrors = new ResponseErrors(HttpStatus.BAD_REQUEST, exception.getMessage(), null, HttpStatus.BAD_REQUEST.value());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseErrors);
    }

    @ExceptionHandler(IllegalArgumentExceptionData.class)
    public  ResponseEntity<ResponseErrors> handleIllegalArgumentExceptionData(IllegalArgumentExceptionData exception) {
        ResponseErrors responseErrors = new ResponseErrors(HttpStatus.BAD_REQUEST, exception.getMessage(), null, HttpStatus.BAD_REQUEST.value());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseErrors);
    }
}
