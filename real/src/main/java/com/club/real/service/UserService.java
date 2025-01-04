package com.club.real.service;

import com.club.real.dto.UserDto;

public interface UserService {
    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);
}