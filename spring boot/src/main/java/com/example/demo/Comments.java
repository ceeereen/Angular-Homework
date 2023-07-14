package com.example.demo;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Comments")
public class Comments {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "commentID")
    private int commentID;

    @Column(name = "userID")
    private int userID;

    @Column(name = "postID")
    private int postID;

    @Column(name = "comment")
    private String comment;

    @Column(name = "creationDate")
    private Date creationDate;

    @Column(name = "isConfirmed")
    private boolean isConfirmed;

    public Comments(int commentID, int userID, int postID, String comment, Date creationDate, boolean isConfirmed) {
        this.commentID = commentID;
        this.userID = userID;
        this.postID = postID;
        this.comment = comment;
        this.creationDate = creationDate;
        this.isConfirmed = isConfirmed;
    }

    public Comments(){
        
    }

    public int getCommentID() {
        return commentID;
    }

    public void setCommentID(int commentID) {
        this.commentID = commentID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public int getPostID() {
        return postID;
    }

    public void setPostID(int postID) {
        this.postID = postID;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public boolean getIsConfirmed() {
        return isConfirmed;
    }

    public void setIsConfirmed(boolean isConfirmed) {
        this.isConfirmed = isConfirmed;
    }
   

}