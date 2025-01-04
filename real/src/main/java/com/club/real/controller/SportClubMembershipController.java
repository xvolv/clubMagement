package com.club.real.controller;

import com.club.real.service.exception.UserAlreadyMemberException;
import com.club.real.dto.SportClubMembershipDto;
import com.club.real.dto.UserDto;
import com.club.real.service.SportClubMembershipService;
import com.club.real.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sport-club-memberships")
public class SportClubMembershipController {

  @Autowired
  private SportClubMembershipService sportClubMembershipService;

  @Autowired
  private UserService userService;

  @PostMapping("/join/{userId}")
  public ResponseEntity<SportClubMembershipDto> joinSportClub(@PathVariable Long userId) {
    // Fetch user information from the user service
    UserDto userDto = userService.getUserById(userId);
    if (userDto == null) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Create a new SportClubMembershipDto
    SportClubMembershipDto sportClubMembershipDto = new SportClubMembershipDto();
    sportClubMembershipDto.setUserId(userDto.getId());
    sportClubMembershipDto.setUserName(userDto.getUserName());

    // Add the user to the sport club
    try {
      SportClubMembershipDto createdMember = sportClubMembershipService.addMember(sportClubMembershipDto);
      return new ResponseEntity<>(createdMember, HttpStatus.CREATED);
    } catch (UserAlreadyMemberException e) {
      return new ResponseEntity<>(HttpStatus.CONFLICT);
    }

  }
}