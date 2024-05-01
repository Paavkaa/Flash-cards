package com.example.controller;

import com.example.model.User;
import com.example.service.RegisterService;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RegisterController {

    private final RegisterService registerService;

    public RegisterController(RegisterService registerService) {
        this.registerService = registerService;
    }

    // Endpoint to create a new user
    @PostMapping("/api/register")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        String username = user.getUsername();
        String email = user.getEmail();
        String password = user.getPassword();

        if(username == null || email == null || password == null) {
            return ResponseEntity.badRequest().body(null);
        }

        if(!isValidEmail(email)) {
            return ResponseEntity.badRequest().body("EMAIL_INVALID");
        }

        if(registerService.isUsernameTaken(username)) {
            return ResponseEntity.status(HttpStatusCode.valueOf(409)).body("USERNAME_TAKEN");
        }

        if (registerService.isEmailTaken(email)) {
            return ResponseEntity.status(HttpStatusCode.valueOf(409)).body("EMAIL_TAKEN");
        }

        user.setPassword(passwordHash(password));

        User createdUser = registerService.createUser(user);
        return ResponseEntity.ok(createdUser);
    }

    private boolean isValidEmail(String email) {
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        return email.matches(emailRegex);
    }

    private String passwordHash(String password) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.encode(password);
    }
}
