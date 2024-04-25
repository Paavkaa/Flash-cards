package com.example.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Card {
    @Id
    private String uuid;  // Unique identifier for each card
    private String term;  // The term or question on the flashcard
    private String description;  // The description or answer for the term

    // Constructors, getters, and setters
    public Card(String uuid, String term, String description) {
        this.uuid = uuid;
        this.term = term;
        this.description = description;
    }

    // Getters and setters
    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getTerm() {
        return term;
    }

    public void setTerm(String term) {
        this.term = term;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}