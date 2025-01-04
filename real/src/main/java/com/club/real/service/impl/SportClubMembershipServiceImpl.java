package com.club.real.service.impl;

import com.club.real.dto.SportClubMembershipDto;
import com.club.real.mapper.SportClubMembershipMapper;
import com.club.real.model.SportClubMembership;
import com.club.real.repository.SportClubMembershipRepository;
import com.club.real.service.ClubService;
import com.club.real.service.SportClubMembershipService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SportClubMembershipServiceImpl implements SportClubMembershipService {

  private final SportClubMembershipRepository repository;
  private final ClubService clubService;

  @Override
  public SportClubMembershipDto addMember(SportClubMembershipDto dto) {
    SportClubMembership entity = SportClubMembershipMapper.mapToSportClubMembership(dto);
    SportClubMembership savedEntity = repository.save(entity);
    // Update total members in the club
    clubService.updateTotalMembers(1L); // Assuming 1L is the ID of the Sport Club
    return SportClubMembershipMapper.mapToSportClubMembershipDto(savedEntity);
  }

  @Override
  public boolean isMember(Long userId) {
    return repository.existsById(userId);
  }
}