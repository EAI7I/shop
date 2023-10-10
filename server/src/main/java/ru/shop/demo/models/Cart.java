package ru.shop.demo.models;

import java.util.Set;

import jakarta.persistence.CascadeType;
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

    @OneToOne(mappedBy = "cart", cascade = CascadeType.ALL)
    private User user;

    //@OneToMany(mappedBy = "cart", cascade = CascadeType.ALL)
    //private Set<Product> product;

    //public Set<Product> getProduct() {
    //    return product;
    //}

    public void setUser(User user) {
        this.user = user;
    }

    //public void setProduct(Set<Product> product) {
    //    this.product = product;

    //    for (Product p : product) {
    //        p.setCart(this);
    //    }
    //}
}
