package com.club.real.service;

import com.club.real.dto.TechClubMembershipDto;

public interface TechClubMembershipService {
  TechClubMembershipDto addMember(TechClubMembershipDto dto);
  boolean isMember(Long userId);
}