package com.example.demo;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "Blog")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userID")
    private int userID;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "creationDate")
    private Date creationDate;

    @Column(name = "isActive")
    private boolean isActive;

    public User() {
    }

    public User(int userID, String username, String email, Date creationDate, boolean isActive) {
        this.userID = userID;
        this.username = username;
        this.email = email;
        this.creationDate = creationDate;
        this.isActive = isActive;
    }
    


    public int getuserID() {
        return userID;
    }

    public void setuserID(int userID) {
        this.userID = userID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public boolean getisActive() {
        return isActive;
    }

    public void setisActive(boolean isActive) {
        this.isActive = isActive;
    }}
