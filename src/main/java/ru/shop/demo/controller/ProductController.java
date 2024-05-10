package ru.shop.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import ru.shop.demo.dto.product.ProductCreateRequest;
import ru.shop.demo.dto.product.ProductResponse;
import ru.shop.demo.service.ProductService;

@RestController
@RequestMapping("/api/product")
@RequiredArgsConstructor
class ProductController {

   final private ProductService productService;

    @PostMapping(value = "/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ProductResponse>> createProduct(@RequestBody ProductCreateRequest productRequest) {
        Optional<List<ProductResponse>> products = productService.createProduct(productRequest);
        if (products.isPresent()) {
            return ResponseEntity.ok(products.get());
        }

        return ResponseEntity.notFound().build();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<ProductResponse> getProductById(@PathVariable("id") long id) {
        Optional<ProductResponse> product = productService.getProductById(id);
        if (product.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        return ResponseEntity.ok(product.get());
    }
}