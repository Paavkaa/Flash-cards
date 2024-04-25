package com.example.model;

import com.example.model.Card;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document
public class Set {
    @Id
    private String uuid;  // Unique identifier for each set
    private List<Card> cards;  // List of cards in the set

    // Constructors, getters, and setters
    public Set(String uuid, List<Card> cards) {
        this.uuid = uuid;
        this.cards = cards;
    }

    // Getters and setters
    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public List<Card> getCards() {
        return cards;
    }

    public void setCards(List<Card> cards) {
        this.cards = cards;
    }
}
