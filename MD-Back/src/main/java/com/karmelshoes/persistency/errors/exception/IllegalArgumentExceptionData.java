package com.karmelshoes.persistency.errors.exception;

import java.io.IOException;

public class IllegalArgumentExceptionData extends IOException {
    public IllegalArgumentExceptionData(String message) {
        super(message);
    }
}
