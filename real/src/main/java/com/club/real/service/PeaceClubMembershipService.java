package com.club.real.service;

import com.club.real.dto.PeaceClubMembershipDto;

public interface PeaceClubMembershipService {
  PeaceClubMembershipDto addMember(PeaceClubMembershipDto dto);
  boolean isMember(Long userId);
}