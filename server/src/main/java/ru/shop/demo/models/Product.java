package ru.shop.demo.models;

import java.util.List;

import jakarta.persistence.ElementCollection;
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
public class Product {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private String description;

    private String price;

    @ElementCollection
    private List<Long> photoIds;

    //@Nullable
    //@ManyToOne(fetch = FetchType.LAZY, optional = false)
    //@JoinColumn(name = "cart_id")
    //private Cart cart;

    public Product(String name, String description, String price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    //public void setCart(@Nullable Cart cart) {
    //    this.cart = cart;
    //}
}
