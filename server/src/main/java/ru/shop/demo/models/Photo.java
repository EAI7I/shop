package ru.shop.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Photo {

    @Id
    @GeneratedValue
    private Long id;

    private String url;

    public Long getId() {
        return id;
    }

    public String getUrl() {
        return url;
    }
}
