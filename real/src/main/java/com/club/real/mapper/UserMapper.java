package com.club.real.mapper;

import com.club.real.dto.UserDto;
import com.club.real.model.User;

public class UserMapper {

  public static UserDto mapToUserDto(User user) {
    return new UserDto(
      user.getId(),
      user.getFullName(),
      user.getEmail(),
      user.getPassword(),
      user.getDepartment(),
      user.getBatch(),
      user.getUserName()
    );
  }

  public static User mapToUser(UserDto userDto) {
    return new User(
      userDto.getId(),
      userDto.getFullName(),
      userDto.getEmail(),
      userDto.getPassword(),
      userDto.getDepartment(),
      userDto.getBatch(),
      userDto.getUserName()
    );
  }
}