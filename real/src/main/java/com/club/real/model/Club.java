package com.club.real.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "clubs")
public class Club {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "club_name", nullable = false)
  private String clubName;

  @Column(name = "total_members")
  private Long totalMembers;

  @Column(name = "rating") // Corrected spelling from "ratting" to "rating"
  private Long rating;
}