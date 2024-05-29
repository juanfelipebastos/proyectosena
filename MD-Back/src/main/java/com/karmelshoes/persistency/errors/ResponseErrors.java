package com.karmelshoes.persistency.errors;

import org.springframework.http.HttpStatusCode;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

public class ResponseErrors {

    private HttpStatusCode httpStatusCode;
    private String message;
    private LocalDateTime date;
    private Integer code;
    private Map<String, Object> errors = new HashMap<>();

    public ResponseErrors() {
    }

    public ResponseErrors(HttpStatusCode httpStatusCode, String message, Map<String, Object> errors, Integer code) {
        this.httpStatusCode = httpStatusCode;
        this.message = message;
        this.errors = errors;
        this.date = LocalDateTime.now();
        this.code = code;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public Map<String, Object> getErrors() {
        return errors;
    }

    public void setErrors(Map<String, Object> errors) {
        this.errors = errors;
    }

    public HttpStatusCode getHttpStatusCode() {
        return httpStatusCode;
    }

    public void setHttpStatusCode(HttpStatusCode httpStatusCode) {
        this.httpStatusCode = httpStatusCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
