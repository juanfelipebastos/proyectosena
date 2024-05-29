package com.karmelshoes.web.configuration.security.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.karmelshoes.web.configuration.security.SimpleGrantedAuthorityJsonCreator;
import com.karmelshoes.web.configuration.security.TokenConfiguration;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import java.io.IOException;
import java.util.*;

public class JwtValidationFilter extends BasicAuthenticationFilter {
    public JwtValidationFilter(AuthenticationManager authenticationManager) {
        super(authenticationManager);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {

        String header = request.getHeader(TokenConfiguration.HEADER_AUTHORIZATION);

        if (header == null || !header.startsWith(TokenConfiguration.PREFIX_TOKEN)) {
            chain.doFilter(request, response);
            return;
        }

        String token = header.replace(TokenConfiguration.PREFIX_TOKEN, "");

        try {

            Claims claims = Jwts.parser()
                    .verifyWith(TokenConfiguration.SECRET_KEY)
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();

            Object authoritiesClaims = claims.get("authorities");
            String userName = claims.getSubject();

            Collection<? extends GrantedAuthority> authorities = Arrays
                    .asList(new ObjectMapper().addMixIn(SimpleGrantedAuthority.class, SimpleGrantedAuthorityJsonCreator.class)
                            .readValue(authoritiesClaims.toString().getBytes(), SimpleGrantedAuthority[].class));

            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userName, null, authorities);

            SecurityContextHolder.getContext().setAuthentication(authentication);

            chain.doFilter(request, response);

        } catch (JwtException exception){
            Map<String, String> body = new HashMap<>();
            body.put("error", exception.getMessage());
            body.put("message", "El token no es valido");

            response.getWriter().write(new ObjectMapper().writeValueAsString(body));
            response.setStatus(401);
            response.setContentType("application/json");
        }
    }
}

