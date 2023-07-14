package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.RelationNotFoundException;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController<userService> {
    

    @Autowired
    private UserRepository userRepository;
  

   @GetMapping("/users")
    public List<User> getUsers() {
        List<User> users = (List<User>) userRepository.findAll();
        
        // Kullanıcıların id değerlerini güncelleyelim
        for (User user : users) {
            user.setuserID(user.getuserID());
        }
        
        return users;
}

    @PostMapping("/users")
    public void addUser(@RequestBody User user) {
        userRepository.save(user);
    }
    
  /*   @GetMapping("/users")
    public List<User> getAllUsers() {
        List<User> userList = new ArrayList<>();
        // userList'i oluşturun (sizinkiyle değiştirin)
     User user1 = new User();
    user1.setuserID(1);
    user1.setUsername("cstoyle0");
    user1.setEmail("zsergison0@cbc.ca");
    user1.setCreationDate(new Date());
    user1.setisActive(true);
    userList.add(user1);

    User user2 = new User();
    user2.setuserID(2);
    user2.setUsername("gdufty1");
    user2.setEmail("kblincko1@biglobe.ne.jp");
    user2.setCreationDate(new Date());
    user2.setisActive(true);
    userList.add(user2);

    // Diğer kullanıcıları ekleyin

    return userList;*/




    @GetMapping("/users/{userID}")
    public ResponseEntity<User> getUserByID(@PathVariable Long userID) throws RelationNotFoundException {
        User user = userRepository.findById(userID)
                .orElseThrow(() -> new RelationNotFoundException("User does not exist"));

        return ResponseEntity.ok(user);
    }

    @PutMapping("/users/{userID}")
    public ResponseEntity<User> updateUser(@PathVariable Long userID, @RequestBody User userDetails) throws RelationNotFoundException {
        User user = userRepository.findById(userID)
                .orElseThrow(() -> new RelationNotFoundException("User does not exist"));

        user.setuserID(userDetails.getuserID());
        user.setUsername(userDetails.getUsername());
        user.setEmail(userDetails.getEmail());
        user.setCreationDate(userDetails.getCreationDate());
        user.setisActive(userDetails.getisActive());

        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/users/{userID}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long userID) throws RelationNotFoundException {
        User user = userRepository.findById(userID)
                .orElseThrow(() -> new RelationNotFoundException("User does not exist"));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
