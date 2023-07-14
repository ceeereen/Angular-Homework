package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.RelationNotFoundException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CommentController<commentService> { 
    

    @Autowired
    private CommentRepository commentRepository;
  

   @GetMapping("/comments")
    public List<Comments> getComments() {
        List<Comments> comments = (List<Comments>) commentRepository.findAll();
        
        // Kullanıcıların id değerlerini güncelleyelim
        for (Comments comment : comments) {
            comment.setCommentID(comment.getCommentID());
        }
        
        return comments;
}

    @PostMapping("/comments")
    public void addComment(@RequestBody Comments comment) {
        commentRepository.save(comment);
    }
    
    @GetMapping("/comments/{commentID}")
    public ResponseEntity<Comments> getCommentByID(@PathVariable Long commentID) throws RelationNotFoundException {
        Comments comment = commentRepository.findById(commentID)
                .orElseThrow(() -> new RelationNotFoundException("Comment does not exist"));

        return ResponseEntity.ok(comment);
    }

    
      @PutMapping("/comments/{commentID}")
        public ResponseEntity<Comments> updateComment(@PathVariable Long commentID, @RequestBody Comments commentDetails) throws RelationNotFoundException {
        Comments comment = commentRepository.findById(commentID)
                .orElseThrow(() -> new RelationNotFoundException("Comment does not exist"));

        comment.setCommentID(commentDetails.getCommentID());
        comment.setUserID(commentDetails.getUserID());
        comment.setPostID(commentDetails.getPostID());
        comment.setCreationDate(commentDetails.getCreationDate());
        comment.setComment(commentDetails.getComment());
        comment.setIsConfirmed(commentDetails.getIsConfirmed());

        Comments updatedComment = commentRepository.save(comment);
        return ResponseEntity.ok(updatedComment);
    }


    @DeleteMapping("/comments/{commentID}")
    public ResponseEntity<Map<String, Boolean>> deleteComment(@PathVariable Long commentID) throws RelationNotFoundException {
        Comments comment = commentRepository.findById(commentID)
                .orElseThrow(() -> new RelationNotFoundException("Comment does not exist"));

        commentRepository.delete(comment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
