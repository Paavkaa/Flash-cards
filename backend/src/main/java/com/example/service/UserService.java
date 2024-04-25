package com.example.service;

import com.example.model.Card;
import com.example.model.Set;
import com.example.model.User;
import com.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void createSampleUser() {
        // Create some cards
        Card card1 = new Card("1", "Term1", "Description1");
        Card card2 = new Card("2", "Term2", "Description2");

        // Create a set and add cards to it
        Set set = new Set("1", Arrays.asList(card1, card2));

        // Create a user and add the set to the user
        User user = new User("1", "john_doe", "john@example.com", "password123", Collections.singletonList(set));

        // Save the user
        userRepository.save(user);
    }
}
