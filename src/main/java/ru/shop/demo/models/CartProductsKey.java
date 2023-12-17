package ru.shop.demo.models;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class CartProductsKey implements Serializable {

    @Column(name = "cart_id")
    private Long cartId;

    @Column(name = "product_id")
    private Long productId;
}