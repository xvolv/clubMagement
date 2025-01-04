package com.club.real.service;

import com.club.real.dto.ArtClubMembershipDto;

public interface ArtClubMembershipService {
  ArtClubMembershipDto addMember(ArtClubMembershipDto dto);

  boolean isMember(Long userId);
}