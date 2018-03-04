package com.onlinestore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlinestore.entities.Shoes;

public interface ShoeRepository extends JpaRepository<Shoes, Long> {

}
