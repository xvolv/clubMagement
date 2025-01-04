package com.club.real.service.impl;

import com.club.real.dto.UserDto;
import com.club.real.mapper.UserMapper;
import com.club.real.model.User;
import com.club.real.repository.UserRepository;
import com.club.real.service.UserService;
import com.club.real.service.exception.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;

  @Override
  public UserDto createUser(UserDto userDto) {
    User user = UserMapper.mapToUser(userDto);
    User savedUser = userRepository.save(user);
    return UserMapper.mapToUserDto(savedUser);
  }

  @Override
  public UserDto getUserById(Long userId) {
    User user = userRepository.findById(userId)
        .orElseThrow(() -> new ResourceNotFoundException("User not found: " + userId));
    return UserMapper.mapToUserDto(user);
  }
}