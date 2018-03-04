package com.onlinestore.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlinestore.entities.Shoes;
import com.onlinestore.repositories.ShoeRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class ShoeController {
	
	@Autowired
	private ShoeRepository shoeRepository;
	
	@GetMapping("/shoes")
	public List<Shoes> getShoes(){
		return shoeRepository.findAll();
	}
	
	@GetMapping("/shoes/{id}")
	public Shoes getShoe(@PathVariable Long id) {
		Shoes selectedShoe = null;
		Optional<Shoes> shoe = shoeRepository.findById(id);
		if (shoe.isPresent()) {
			selectedShoe = shoe.get();
		}
		return selectedShoe;
	}
	
	@DeleteMapping("/shoes/{id}")
	public boolean deleteShoes(@PathVariable Long id){
		shoeRepository.deleteById(id);
		return true;
	}
	
	@PostMapping("/shoes")
	public Shoes addShoes(@RequestBody Shoes shoes){
		return shoeRepository.save(shoes);

	}
	
	@PutMapping("/shoes")
	public Shoes updateShoes(@RequestBody Shoes shoes){
		return shoeRepository.save(shoes);

	}
	
	
}
