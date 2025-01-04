package com.club.real.mapper;

import com.club.real.dto.SportClubMembershipDto;
import com.club.real.model.SportClubMembership;

public class SportClubMembershipMapper {

  public static SportClubMembership mapToSportClubMembership(SportClubMembershipDto dto) {
    return new SportClubMembership(
        dto.getId(),
        dto.getUserId(),
        dto.getUserName());
  }

  public static SportClubMembershipDto mapToSportClubMembershipDto(SportClubMembership entity) {
    return new SportClubMembershipDto(
        entity.getId(),
        entity.getUserId(),
        entity.getUserName());
  }
}