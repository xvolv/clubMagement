package com.club.real.repository;

import com.club.real.model.PeaceClubMembership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PeaceClubMembershipRepository extends JpaRepository<PeaceClubMembership, Long> {
  boolean existsByUserId(Long userId);
}
