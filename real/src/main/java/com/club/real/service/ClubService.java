package com.club.real.service;

import com.club.real.dto.ClubDto;

public interface ClubService {
  ClubDto createClub(ClubDto clubDto);
  ClubDto getClubById(Long clubId);
  void updateTotalMembers(Long clubId);
}