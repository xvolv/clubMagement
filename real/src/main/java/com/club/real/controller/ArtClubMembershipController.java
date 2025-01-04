package com.club.real.controller;

import com.club.real.dto.ArtClubMembershipDto;
import com.club.real.dto.UserDto;
import com.club.real.service.exception.UserAlreadyMemberException;
import com.club.real.service.ArtClubMembershipService;
import com.club.real.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/art-club-memberships")
public class ArtClubMembershipController {

  @Autowired
  private ArtClubMembershipService artClubMembershipService;

  @Autowired
  private UserService userService;

  @PostMapping("/join/{userId}")
  public ResponseEntity<ArtClubMembershipDto> joinArtClub(@PathVariable Long userId) {
    // Fetch user information from the user service
    UserDto userDto = userService.getUserById(userId);
    if (userDto == null) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Create a new ArtClubMembershipDto
    ArtClubMembershipDto artClubMembershipDto = new ArtClubMembershipDto();
    artClubMembershipDto.setUserId(userDto.getId());
    artClubMembershipDto.setUserName(userDto.getUserName());

    try {
      // Add the user to the art club
      ArtClubMembershipDto createdMember = artClubMembershipService.addMember(artClubMembershipDto);
      return new ResponseEntity<>(createdMember, HttpStatus.CREATED);
    } catch (UserAlreadyMemberException e) {
      return new ResponseEntity<>(HttpStatus.CONFLICT);
    }
  }
}