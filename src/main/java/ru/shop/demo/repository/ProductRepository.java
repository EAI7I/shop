package ru.shop.demo.repository;

import ru.shop.demo.DTO.product.ProductResponse;
import ru.shop.demo.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Integer>{

     @Query(value = "SELECT p.id AS id, p.name AS name, p.description AS description, p.price AS price, " +
           "(SELECT ARRAY_AGG(ph.url) FROM photo ph " +
           "JOIN product_photo_ids ppi ON p.id = ppi.product_id " +
           "WHERE ppi.photo_ids = ph.id) AS photos " +
           "FROM product p;",
           nativeQuery = true)
     Optional<List<ProductResponse>> findALLProducts();

      @Query(value = "SELECT p.id AS id, p.name AS name, p.description AS description, p.price AS price, " +
           "(SELECT ARRAY_AGG(ph.url) FROM photo ph " +
           "JOIN product_photo_ids ppi ON :id = ppi.product_id " +
           "WHERE ppi.photo_ids = ph.id) AS photos " +
           "FROM product p WHERE :id = p.id;",
           nativeQuery = true)
     Optional<ProductResponse> findById(@Param("id") long id);
}
