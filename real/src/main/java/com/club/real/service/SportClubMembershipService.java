package com.club.real.service;

import com.club.real.dto.SportClubMembershipDto;

public interface SportClubMembershipService {
  SportClubMembershipDto addMember(SportClubMembershipDto dto);
  boolean isMember(Long userId);
}