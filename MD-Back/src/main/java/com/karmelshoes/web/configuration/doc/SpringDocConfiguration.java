package com.karmelshoes.web.configuration.doc;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringDocConfiguration {

    @Bean
    public OpenAPI customOpenApi() {
        return  new OpenAPI()
                .info(new Info()
                        .title("Documentacion Para Api del proyecto SENA")
                        .version("1.0")
                        .description("Backend para un carrito compras con login y roles con jwt y spring")
                        .termsOfService("http://swagger.io/terms/")
                        .license(new License().name("Apache 2.0").url("http://springdoc.org")));
    }
}

