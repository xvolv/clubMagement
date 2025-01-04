package com.club.real.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
  private Long id;
  private String fullName;
  private String email;
  private String password; // Password will be received here from the client
  private String department;
  private String batch;
  private String userName;
}