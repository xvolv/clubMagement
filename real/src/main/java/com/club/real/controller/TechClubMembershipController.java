package com.club.real.controller;

import com.club.real.dto.TechClubMembershipDto;
import com.club.real.dto.UserDto;
import com.club.real.service.exception.UserAlreadyMemberException;
import com.club.real.service.TechClubMembershipService;
import com.club.real.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tech-club-memberships")
public class TechClubMembershipController {

  private final TechClubMembershipService techClubMembershipService;
  private final UserService userService;

  public TechClubMembershipController(TechClubMembershipService techClubMembershipService, UserService userService) {
    this.techClubMembershipService = techClubMembershipService;
    this.userService = userService;
  }

  @PostMapping("/join")
  public ResponseEntity<TechClubMembershipDto> joinTechClub(@RequestParam String userName, @RequestParam String password) {
    // Fetch user by username and password using UserService
    UserDto userDto = userService.getUserByUserNameAndPassword(userName, password);
    
    if (userDto == null) {
      return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);  // Unauthorized if user not found
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
      return new ResponseEntity<>(HttpStatus.CONFLICT);  // Conflict if user is already a member
    }
  }
}
