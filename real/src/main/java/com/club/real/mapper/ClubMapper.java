package com.club.real.mapper;

import com.club.real.dto.ClubDto;
import com.club.real.model.Club;

public class ClubMapper {

  public static Club mapToClub(ClubDto clubDto) {
    return new Club(
      clubDto.getId(),
      clubDto.getClubName(), // Ensure this matches the field name in ClubDto
      clubDto.getTotalMembers(), // Ensure this matches the field name in ClubDto
      clubDto.getRating() // Ensure this matches the field name in ClubDto
    );
  }

  public static ClubDto mapToClubDto(Club club) {
    return new ClubDto(
      club.getId(),
      club.getClubName(), // Ensure this matches the field name in Club
      club.getTotalMembers(), // Ensure this matches the field name in Club
      club.getRating() // Ensure this matches the field name in Club
    );
  }
}