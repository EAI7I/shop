package ru.shop.demo.models;

import java.util.Set;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Cart {

    @Id
    @GeneratedValue
    private Long id;

    @OneToOne(mappedBy = "cart")
    private User user;

    @OneToMany(mappedBy = "cart")
    Set<CartProductsCount> counts;
}
