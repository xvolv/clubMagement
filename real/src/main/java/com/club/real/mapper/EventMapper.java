package com.club.real.mapper;

import com.club.real.dto.EventDto;
import com.club.real.model.Event;


public class EventMapper {

  public static Event mapToEvent(EventDto eventDto) {

    return new Event(
        eventDto.getId(),
        eventDto.getDetails());
  }

  public static EventDto mapToEventDto(Event event) {
        return new EventDto(
            event.getId(),
            event.getDetails());
    }
}
