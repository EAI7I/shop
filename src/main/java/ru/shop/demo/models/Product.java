package ru.shop.demo.models;

import java.util.List;
import java.util.Set;

import jakarta.persistence.*;
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

    @Column(nullable = false)
    private String name;

    private String description;

    @Column(nullable = false)
    private String price;

    @ElementCollection
    private List<Long> photoIds;

    @Column(nullable = false)
    private Integer count;

    @ManyToMany(mappedBy = "products")
    private Set<User> users;

//    @ManyToMany(mappedBy = "products")
//    private Set<Cart> carts;

    @OneToMany(mappedBy = "products")
    private Set<OrderProduct> orderProducts;
}
