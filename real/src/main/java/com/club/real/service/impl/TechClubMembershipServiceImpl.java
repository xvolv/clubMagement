package com.club.real.service.impl;

import com.club.real.dto.TechClubMembershipDto;
import com.club.real.service.exception.UserAlreadyMemberException;
import com.club.real.mapper.TechClubMembershipMapper;
import com.club.real.model.TechClubMembership;
import com.club.real.repository.TechClubMembershipRepository;
import com.club.real.service.ClubService;
import com.club.real.service.TechClubMembershipService;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TechClubMembershipServiceImpl implements TechClubMembershipService {

  private final TechClubMembershipRepository repository;
  private final ClubService clubService;

  @Override
  public TechClubMembershipDto addMember(TechClubMembershipDto dto) {
    if (repository.existsByUserId(dto.getUserId())) {
      throw new UserAlreadyMemberException("User is already a member of the tech club");
    }

    TechClubMembership entity = TechClubMembershipMapper.mapToTechClubMembership(dto);
    TechClubMembership savedEntity = repository.save(entity);
    clubService.updateTotalMembers(4L); // Assuming 4L is the ID of the Tech Club
    return TechClubMembershipMapper.mapToTechClubMembershipDto(savedEntity);
  }

  @Override
  public boolean isMember(Long userId) {
    return repository.existsByUserId(userId);
  }
}
