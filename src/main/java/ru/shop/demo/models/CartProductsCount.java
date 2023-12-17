package ru.shop.demo.models;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;

@Entity
public class CartProductsCount {
    
    @EmbeddedId
    CartProductsKey id;

    @ManyToOne
    @MapsId("cartId")
    @JoinColumn(name = "cart_id")
    Cart cart;

    @ManyToOne
    @MapsId("productId")
    @JoinColumn(name = "product_id")
    Product product;

    int count;
}
