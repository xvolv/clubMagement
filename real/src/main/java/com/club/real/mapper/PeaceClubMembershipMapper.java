package com.club.real.mapper;

import com.club.real.dto.PeaceClubMembershipDto;
import com.club.real.model.PeaceClubMembership;

public class PeaceClubMembershipMapper {

  public static PeaceClubMembership mapToPeaceClubMembership(PeaceClubMembershipDto dto) {
    return new PeaceClubMembership(
      dto.getId(),
      dto.getUserId(),
      dto.getUserName()
    );
  }

  public static PeaceClubMembershipDto mapToPeaceClubMembershipDto(PeaceClubMembership entity) {
    return new PeaceClubMembershipDto(
      entity.getId(),
      entity.getUserId(),
      entity.getUserName()
    );
  }
}