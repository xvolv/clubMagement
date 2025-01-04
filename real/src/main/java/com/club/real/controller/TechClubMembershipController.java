package com.club.real.controller;

import com.club.real.dto.TechClubMembershipDto;
import com.club.real.dto.UserDto;
import com.club.real.service.exception.UserAlreadyMemberException;
import com.club.real.service.TechClubMembershipService;
import com.club.real.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tech-club-memberships")
public class TechClubMembershipController {

  @Autowired
  private TechClubMembershipService techClubMembershipService;

  @Autowired
  private UserService userService;

  @PostMapping("/join/{userId}")
  public ResponseEntity<TechClubMembershipDto> joinTechClub(@PathVariable Long userId) {
    // Fetch user information from the user service
    UserDto userDto = userService.getUserById(userId);
    if (userDto == null) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Create a new TechClubMembershipDto
    TechClubMembershipDto techClubMembershipDto = new TechClubMembershipDto();
    techClubMembershipDto.setUserId(userDto.getId());
    techClubMembershipDto.setUserName(userDto.getUserName());

    try {
      // Add the user to the tech club
      TechClubMembershipDto createdMember = techClubMembershipService.addMember(techClubMembershipDto);
      return new ResponseEntity<>(createdMember, HttpStatus.CREATED);
    } catch (UserAlreadyMemberException e) {
      return new ResponseEntity<>(HttpStatus.CONFLICT);
    }
  }
}