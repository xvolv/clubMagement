package com.club.real.service.impl;

import com.club.real.dto.UserDto;
import com.club.real.model.User;
import com.club.real.repository.UserRepository;
import com.club.real.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  private UserRepository userRepository;

  @Override
  public UserDto getUserById(Long userId) {
    // Existing method for getting user by ID
    User user = userRepository.findById(userId).orElse(null);
    if (user != null) {
      return new UserDto(user.getId(), user.getFullName(), user.getEmail(), user.getPassword(),
          user.getDepartment(), user.getBatch(), user.getUserName());
    }
    return null;
  }

  @Override
  public UserDto createUser(UserDto userDto) {
    // Map DTO to entity
    User user = new User();
    user.setFullName(userDto.getFullName());
    user.setEmail(userDto.getEmail());
    user.setPassword(userDto.getPassword());
    user.setDepartment(userDto.getDepartment());
    user.setBatch(userDto.getBatch());
    user.setUserName(userDto.getUserName());

    // Save the user to the database
    User savedUser = userRepository.save(user);

    // Return the saved user as a DTO
    return new UserDto(savedUser.getId(), savedUser.getFullName(), savedUser.getEmail(), savedUser.getPassword(),
        savedUser.getDepartment(), savedUser.getBatch(), savedUser.getUserName());
  }

  @Override
  public UserDto getUserByUserNameAndPassword(String userName, String password) {
    // Fetch user by username and password
    User user = userRepository.findByUserNameAndPassword(userName, password);
    if (user != null) {
      return new UserDto(user.getId(), user.getFullName(), user.getEmail(), user.getPassword(),
          user.getDepartment(), user.getBatch(), user.getUserName());
    }
    return null;
  }
}
