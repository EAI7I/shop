package ru.shop.demo.DTO.product;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductCreateRequest {
    
    String name;
    String description;
    String price;
    List<String> photosUrls;
}
