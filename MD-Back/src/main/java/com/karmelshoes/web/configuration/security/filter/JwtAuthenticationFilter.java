package com.karmelshoes.web.configuration.security.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.karmelshoes.domain.models.CustomUserDetailsModel;
import com.karmelshoes.persistency.entity.ClientEntity;
import com.karmelshoes.web.configuration.security.TokenConfiguration;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


import java.io.IOException;
import java.util.*;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private AuthenticationManager authenticationManager;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        ClientEntity user = null;
        String name = null;
        String password = null;

        try {
            user = new ObjectMapper().readValue(request.getInputStream(), ClientEntity.class);
            name = user.getName();
            password = user.getPassword();

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(name, password);
        return authenticationManager.authenticate(authToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        CustomUserDetailsModel userDetails = (CustomUserDetailsModel) authResult.getPrincipal();
        Collection<? extends GrantedAuthority> roles = authResult.getAuthorities();
        Boolean isAdmin = roles.stream().anyMatch(role -> role.getAuthority().equals("ROLE_ADMIN"));
        String name = userDetails.getUsername();
        Long clientId = userDetails.getUserId();

        String token = Jwts.builder()
                .setSubject(name)
                .claim("clientId", clientId)
                .claim("isAdmin", isAdmin)
                .claim("authorities", new ObjectMapper().writeValueAsString(roles))
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 3600000))
                .signWith(TokenConfiguration.SECRET_KEY)
                .compact();

        response.addHeader(TokenConfiguration.HEADER_AUTHORIZATION, TokenConfiguration.PREFIX_TOKEN + token);

        Map<String, Object> body = new HashMap<>();
        body.put("token", token);
        body.put("message", "Hola "+ name + ", has iniciado sesion con exito");
        body.put("name", name);
        response.getWriter().write(new ObjectMapper().writeValueAsString(body));
        response.setStatus(200);
        response.setContentType("application/json");
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException, ServletException {
        Map<String, Object> body = new HashMap<>();
        body.put("message", "Error en la autenticacion userName o password incorrecto");
        body.put("error", failed.getMessage());
        response.getWriter().write(new ObjectMapper().writeValueAsString(body));
        response.setStatus(401);
        response.setContentType("application/json");
    }
}

