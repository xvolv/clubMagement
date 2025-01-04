package com.club.real.service.exception;

public class UserAlreadyMemberException extends RuntimeException {
  public UserAlreadyMemberException(String message) {
    super(message);
  }
}