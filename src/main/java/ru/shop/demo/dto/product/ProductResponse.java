package ru.shop.demo.dto.product;

import java.util.List;

public interface ProductResponse {
    
    Long getId();
    String getName();
    String getDescription();
    String getPrice();
    List<String> getPhotos();
}
