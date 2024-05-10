//package ru.shop.demo.models;
//
//import java.util.Set;
//
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Data
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
//@Entity
//public class Cart {
//
//    @Id
//    @GeneratedValue
//    private Long id;
//
//    @OneToOne(mappedBy = "cart")
//    private User user;
//
//    @ManyToMany
//    @JoinTable(
//            name = "cart_product",
//            joinColumns = @JoinColumn(name = "cart_id"),
//            inverseJoinColumns = @JoinColumn(name = "product_id"))
//    private Set<Product> products;
//}
