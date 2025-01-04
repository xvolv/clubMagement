package com.club.real.repository;

import com.club.real.model.SportClubMembership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SportClubMembershipRepository extends JpaRepository<SportClubMembership, Long> {
  Long countBy();
}