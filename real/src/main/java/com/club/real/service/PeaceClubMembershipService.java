package com.club.real.service;

import com.club.real.controller.PeaceClubMembershipDto;

public interface PeaceClubMembershipService {
  PeaceClubMembershipDto addMember(PeaceClubMembershipDto dto);
  boolean isMember(Long userId);
}