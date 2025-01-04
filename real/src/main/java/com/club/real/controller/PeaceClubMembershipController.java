package com.club.real.controller;

import com.club.real.dto.PeaceClubMembershipDto;
import com.club.real.dto.UserDto;
import com.club.real.service.exception.UserAlreadyMemberException;
import com.club.real.service.PeaceClubMembershipService;
import com.club.real.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/peace-club-memberships")
public class PeaceClubMembershipController {

  @Autowired
  private PeaceClubMembershipService peaceClubMembershipService;

  @Autowired
  private UserService userService;

  @PostMapping("/join/{userId}")
  public ResponseEntity<PeaceClubMembershipDto> joinPeaceClub(@PathVariable Long userId) {
    // Fetch user information from the user service
    UserDto userDto = userService.getUserById(userId);
    if (userDto == null) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Create a new PeaceClubMembershipDto
    PeaceClubMembershipDto peaceClubMembershipDto = new PeaceClubMembershipDto();
    peaceClubMembershipDto.setUserId(userDto.getId());
    peaceClubMembershipDto.setUserName(userDto.getUserName());

    try {
      // Add the user to the peace club
      PeaceClubMembershipDto createdMember = peaceClubMembershipService.addMember(peaceClubMembershipDto);
      return new ResponseEntity<>(createdMember, HttpStatus.CREATED);
    } catch (UserAlreadyMemberException e) {
      return new ResponseEntity<>(HttpStatus.CONFLICT);
    }
  }
}
