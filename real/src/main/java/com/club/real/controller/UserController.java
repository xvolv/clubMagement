package com.club.real.controller;

import com.club.real.dto.UserDto;
import com.club.real.service.UserService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

  private final UserService userService;


  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping
  public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
    UserDto createdUser = userService.createUser(userDto);
    return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
  }

  @GetMapping("/{id}")
  public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {
    UserDto user = userService.getUserById(id);
    return new ResponseEntity<>(user, HttpStatus.OK);
  }
}