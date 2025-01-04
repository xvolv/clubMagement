package com.club.real.service.impl;

import com.club.real.dto.PeaceClubMembershipDto;
import com.club.real.service.exception.UserAlreadyMemberException;
import com.club.real.mapper.PeaceClubMembershipMapper;
import com.club.real.model.PeaceClubMembership;
import com.club.real.repository.PeaceClubMembershipRepository;
import com.club.real.service.ClubService;
import com.club.real.service.PeaceClubMembershipService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PeaceClubMembershipServiceImpl implements PeaceClubMembershipService {

  private final PeaceClubMembershipRepository repository;
  private final ClubService clubService;

  @Override
  public PeaceClubMembershipDto addMember(PeaceClubMembershipDto dto) {
    // Check if the user is already a member of the peace club
    if (repository.existsByUserId(dto.getUserId())) {
      throw new UserAlreadyMemberException("User is already a member of the peace club");
    }

    PeaceClubMembership entity = PeaceClubMembershipMapper.mapToPeaceClubMembership(dto);
    PeaceClubMembership savedEntity = repository.save(entity);
    // Update total members in the club
    clubService.updateTotalMembers(3L); // Assuming 3L is the ID of the Peace Club
    return PeaceClubMembershipMapper.mapToPeaceClubMembershipDto(savedEntity);
  }

  @Override
  public boolean isMember(Long userId) {
    return repository.existsByUserId(userId);
  }
}