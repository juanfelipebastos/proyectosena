package com.karmelshoes.web.configuration.security;

import io.jsonwebtoken.Jwts;

import javax.crypto.SecretKey;

public class TokenConfiguration {
    public static final String PREFIX_TOKEN = "Bearer ";
    public static final String HEADER_AUTHORIZATION = "Authorization";
    public static final SecretKey SECRET_KEY  = Jwts.SIG.HS256.key().build();
}
