package ru.shop.demo.repository;

import ru.shop.demo.models.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Integer>{

    Optional<User> findByEmail(String email);
 }