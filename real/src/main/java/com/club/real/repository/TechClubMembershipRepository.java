package com.club.real.repository;

import com.club.real.model.TechClubMembership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TechClubMembershipRepository extends JpaRepository<TechClubMembership, Long> {
  boolean existsByUserId(Long userId);
}