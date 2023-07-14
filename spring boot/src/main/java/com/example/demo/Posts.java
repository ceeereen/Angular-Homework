package com.example.demo;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Posts")
public class Posts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "postID")
    private int postID;

    @Column(name = "userID")
    private int userID;

    @Column(name = "categoryID")
    private int categoryID;

    @Column(name = "title")
    private String title;

   @Column(name = "content")
    private String content;

    @Column(name = "viewCount")
    private Long viewCount;

    @Column(name = "creationDate")
    private Date creationDate;

    @Column(name = "isPublished")
    private boolean isPublished;
   

    public Posts() {
    }

     public Posts(int postID, int userID, int categoryID, String title, String content, Long viewCount,
            Date creationDate, boolean isPublished) {
        this.postID = postID;
        this.userID = userID;
        this.categoryID = categoryID;
        this.title = title;
        this.content = content;
        this.viewCount = viewCount;
        this.creationDate = creationDate;
        this.isPublished = isPublished;
    }

    public int getPostID() {
        return postID;
    }

    public void setPostID(int postID) {
        this.postID = postID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public int getCategoryID() {
        return categoryID;
    }

    public void setCategoryID(int categoryID) {
        this.categoryID = categoryID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getViewCount() {
        return viewCount;
    }

    public void setViewCount(Long viewCount) {
        this.viewCount = viewCount;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public boolean getIsPublished() {
        return isPublished;
    }

    public void setIsPublished(boolean isPublished) {
        this.isPublished = isPublished;
    }

}
