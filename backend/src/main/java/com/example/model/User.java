package com.example.model;

import com.example.model.Set;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "users")
public class User {
    @Id
    private String uuid;  // Unique identifier for each user
    private String userName;  // Username of the user
    private String email;  // Email address of the user
    private String password;  // Password for user authentication
    private List<Set> sets;  // List of sets owned by the user

    // Constructors, getters, and setters
    public User(String uuid, String userName, String email, String password, List<Set> sets) {
        this.uuid = uuid;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.sets = sets;
    }

    // Getters and setters
    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Set> getSets() {
        return sets;
    }

    public void setSets(List<Set> sets) {
        this.sets = sets;
    }
}
