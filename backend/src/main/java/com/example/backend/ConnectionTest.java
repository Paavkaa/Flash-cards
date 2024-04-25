package com.example.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConnectionTest {
    @GetMapping("/api/test")
    public String testConnection() {
        return "Connection successful!";
    }
}
