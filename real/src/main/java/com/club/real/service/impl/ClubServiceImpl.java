package com.club.real.service.impl;

import com.club.real.dto.ClubDto;
import com.club.real.mapper.ClubMapper;
import com.club.real.model.Club;
import com.club.real.repository.ClubRepository;
import com.club.real.repository.SportClubMembershipRepository;
import com.club.real.service.ClubService;
import com.club.real.service.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClubServiceImpl implements ClubService {

  private final ClubRepository clubRepository;
  private final SportClubMembershipRepository sportClubMembershipRepository;

  @Override
  public ClubDto createClub(ClubDto clubDto) {
    Club club = ClubMapper.mapToClub(clubDto);
    Club savedClub = clubRepository.save(club);
    return ClubMapper.mapToClubDto(savedClub);
  }

  @Override
  public ClubDto getClubById(Long clubId) {
    Club club = clubRepository.findById(clubId)
        .orElseThrow(() -> new ResourceNotFoundException("Club not found: " + clubId));
    if ("Sport Club".equals(club.getClubName())) {
      Long totalMembers = sportClubMembershipRepository.count();
      club.setTotalMembers(totalMembers);
      clubRepository.save(club);
    }
    return ClubMapper.mapToClubDto(club);
  }

  @Override
  public void updateTotalMembers(Long clubId) {
    Club club = clubRepository.findById(clubId)
        .orElseThrow(() -> new ResourceNotFoundException("Club not found: " + clubId));
    if ("Sport Club".equals(club.getClubName())) {
      Long totalMembers = sportClubMembershipRepository.count();
      club.setTotalMembers(totalMembers);
      clubRepository.save(club);
    }
  }
}