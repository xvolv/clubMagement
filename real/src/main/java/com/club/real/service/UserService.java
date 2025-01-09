package com.club.real.service;

import com.club.real.dto.UserDto;

public interface UserService {
    UserDto getUserById(Long userId);

    UserDto createUser(UserDto userDto); // Add this method to the interface

    UserDto getUserByUserNameAndPassword(String userName, String password);
}
