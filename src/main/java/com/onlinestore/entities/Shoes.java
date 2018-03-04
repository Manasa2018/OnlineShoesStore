package com.onlinestore.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Shoes {
	@Id
	@GeneratedValue
	private Long id;
	private String shoeBrand;
	private String shoeName;
	private int size;
	private double price;
	
	public Shoes() {
	}
	public Shoes(String shoeBrand, String shoeName, int size, double price) {
		this.shoeBrand = shoeBrand;
		this.shoeName = shoeName;
		this.size = size;
		this.price = price;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getShoeBrand() {
		return shoeBrand;
	}
	public void setShoeBrand(String shoeBrand) {
		this.shoeBrand = shoeBrand;
	}
	public String getShoeName() {
		return shoeName;
	}
	public void setShoeName(String shoeName) {
		this.shoeName = shoeName;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Shoes [id=" + id + ", shoeBrand=" + shoeBrand + ", shoeName=" + shoeName + ", size=" + size + ", price="
				+ price + "]";
	}

}
