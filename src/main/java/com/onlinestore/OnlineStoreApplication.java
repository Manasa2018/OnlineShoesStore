package com.onlinestore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.onlinestore.entities.Shoes;
import com.onlinestore.repositories.ShoeRepository;

@SpringBootApplication
public class OnlineStoreApplication implements CommandLineRunner {

	@Autowired
	private ShoeRepository shoeRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(OnlineStoreApplication.class, args);

	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		shoeRepository.save(new Shoes("Puma","Running",9,12.34));
		shoeRepository.save(new Shoes("Adidas","Sports",10,16.34));
	}

}
