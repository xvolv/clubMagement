package com.club.real.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SportClubMembershipDto {
  private Long id;
  private Long userId;
  private String userName;
}
