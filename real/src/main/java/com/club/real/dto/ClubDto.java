package com.club.real.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.AllArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClubDto {
  private Long id;
  private String clubName;
  private Long totalMembers;
  private Long rating; // Corrected spelling from "ratting" to "rating"
}