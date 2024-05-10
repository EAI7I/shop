package ru.shop.demo.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_order")
public class Order {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @Enumerated(EnumType.ORDINAL)
    private PaymentStatus payment_status;

    @Enumerated(EnumType.ORDINAL)
    private DeliveryStatus delivery_status;

    @OneToMany(mappedBy = "order")
    private Set<OrderProduct> orderProducts;
}
