package com.club.real.service.impl;

import com.club.real.dto.ArtClubMembershipDto;
import com.club.real.service.exception.UserAlreadyMemberException;
import com.club.real.mapper.ArtClubMembershipMapper;
import com.club.real.model.ArtClubMembership;
import com.club.real.repository.ArtClubMembershipRepository;
import com.club.real.service.ArtClubMembershipService;
import com.club.real.service.ClubService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ArtClubMembershipServiceImpl implements ArtClubMembershipService {

  private final ArtClubMembershipRepository repository;
  private final ClubService clubService;

  @Override
  public ArtClubMembershipDto addMember(ArtClubMembershipDto dto) {
    // Check if the user is already a member of the art club
    if (repository.existsByUserId(dto.getUserId())) {
      throw new UserAlreadyMemberException("User is already a member of the art club");
    }

    ArtClubMembership entity = ArtClubMembershipMapper.mapToArtClubMembership(dto);
    ArtClubMembership savedEntity = repository.save(entity);
    // Update total members in the club
    clubService.updateTotalMembers(2L); // Assuming 2L is the ID of the Art Club
    return ArtClubMembershipMapper.mapToArtClubMembershipDto(savedEntity);
  }

  @Override
  public boolean isMember(Long userId) {
    return repository.existsByUserId(userId);
  }
}