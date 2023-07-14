package com.example.demo;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Categories")
public class Categories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "categoryID")
    private int categoryID;

   @Column(name = "name")
    private String name;

    @Column(name = "creationDate")
    private Date creationDate;


    public Categories() {
    }


    public int getCategoryID() {
        return categoryID;
    }


    public void setCategoryID(int categoryID) {
        this.categoryID = categoryID;
    }


    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }


    public Date getCreationDate() {
        return creationDate;
    }


    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

     

}
