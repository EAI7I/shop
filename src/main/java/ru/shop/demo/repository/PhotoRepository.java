package ru.shop.demo.repository;

import ru.shop.demo.models.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface PhotoRepository extends JpaRepository<Photo, Integer>{

    Optional<Photo> findById(long id);

}
