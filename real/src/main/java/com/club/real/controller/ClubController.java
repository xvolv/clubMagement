package com.club.real.controller;

import com.club.real.dto.ClubDto;
import com.club.real.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/clubs")
public class ClubController {

  @Autowired
  private ClubService clubService;

  @PostMapping
  public ResponseEntity<ClubDto> createClub(@RequestBody ClubDto clubDto) {
    ClubDto createdClub = clubService.createClub(clubDto);
    return new ResponseEntity<>(createdClub, HttpStatus.CREATED);
  }
}