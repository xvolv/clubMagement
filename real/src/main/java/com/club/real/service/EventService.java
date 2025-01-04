package com.club.real.service;

import java.util.List;

import com.club.real.dto.EventDto;

public interface EventService {
  EventDto createEvent(EventDto eventDto);

  EventDto getEventById(Long eventId);

  List<EventDto> getAllEvents();

  EventDto updateEvent(Long eventId, EventDto updatedEvent);

  void deleteEvent(Long eventId);

}
