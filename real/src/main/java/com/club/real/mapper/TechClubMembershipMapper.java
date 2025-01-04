package com.club.real.mapper;

import com.club.real.dto.TechClubMembershipDto;
import com.club.real.model.TechClubMembership;

public class TechClubMembershipMapper {

  public static TechClubMembership mapToTechClubMembership(TechClubMembershipDto dto) {
    return new TechClubMembership(
        dto.getId(),
        dto.getUserId(),
        dto.getUserName());
  }

  public static TechClubMembershipDto mapToTechClubMembershipDto(TechClubMembership entity) {
    return new TechClubMembershipDto(
        entity.getId(),
        entity.getUserId(),
        entity.getUserName());
  }
}