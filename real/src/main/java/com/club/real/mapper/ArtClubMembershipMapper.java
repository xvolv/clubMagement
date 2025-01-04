package com.club.real.mapper;

import com.club.real.dto.ArtClubMembershipDto;
import com.club.real.model.ArtClubMembership;

public class ArtClubMembershipMapper {

  public static ArtClubMembership mapToArtClubMembership(ArtClubMembershipDto dto) {
    return new ArtClubMembership(
      dto.getId(),
      dto.getUserId(),
      dto.getUserName()
    );
  }

  public static ArtClubMembershipDto mapToArtClubMembershipDto(ArtClubMembership entity) {
    return new ArtClubMembershipDto(
      entity.getId(),
      entity.getUserId(),
      entity.getUserName()
    );
  }
}