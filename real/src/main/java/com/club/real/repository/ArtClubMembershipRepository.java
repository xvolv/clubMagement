package com.club.real.repository;

import com.club.real.model.ArtClubMembership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtClubMembershipRepository extends JpaRepository<ArtClubMembership, Long> {
  Long countBy();
  boolean existsByUserId(Long userId);
}