package ru.shop.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.ArrayList;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import ru.shop.demo.DTO.product.ProductCreateRequest;
import ru.shop.demo.DTO.product.ProductResponse;
import ru.shop.demo.models.Photo;
import ru.shop.demo.models.Product;
import ru.shop.demo.repository.PhotoRepository;
import ru.shop.demo.repository.ProductRepository;

@Service
@RequiredArgsConstructor
public class ProductService {
    
    private final ProductRepository productRepository;
    private final PhotoRepository photoRepository;


    public Optional<List<ProductResponse>> createProduct(ProductCreateRequest productRequest) {
        Product product = new Product();
        product.setName(productRequest.getName());
        product.setDescription(productRequest.getDescription());
        product.setPrice(productRequest.getPrice());

        List<Long> photoIds = new ArrayList<>();

        for (String photoUrl : productRequest.getPhotosUrls()) {
            Photo photo = new Photo();
            photo.setUrl(photoUrl);
            photoRepository.save(photo);
            photoIds.add(photo.getId());
        }

        product.setPhotoIds(photoIds);
        productRepository.save(product);

        return productRepository.findALLProducts();
    }

    public Optional<ProductResponse> getProductById(long id) {
        return productRepository.findById(id);
    }
}
