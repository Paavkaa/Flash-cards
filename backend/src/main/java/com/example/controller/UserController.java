package com.example.controller;

import com.example.model.User;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    // Endpoint to create a new user
    @PostMapping("/api/register")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        String username = user.getUsername();
        String email = user.getEmail();
        String password = user.getPassword();

        if(username == null || email == null || password == null) {
            return ResponseEntity.badRequest().body(null);
        }

       if(!isValidEmail(email)) {
            return ResponseEntity.badRequest().body(null);
       }

       //TODO: Check if username and email are unique

        user.setPassword(passwordHash(password));

        User createdUser = userService.createUser(user);
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
