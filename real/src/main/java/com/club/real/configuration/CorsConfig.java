package com.club.real.configuration;  // Use your appropriate package name

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
        // Allow all endpoints to accept requests from localhost:3000 (React frontend)
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:3000")  // React frontend
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // Allow HTTP methods
            .allowedHeaders("*")  // Allow all headers
            .allowCredentials(true);  // Allow cookies/credentials if needed
    }
}
