package com.club.real.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.club.real.dto.EventDto;
import com.club.real.mapper.EventMapper;
import com.club.real.model.Event;
import com.club.real.repository.EventRepository;
import com.club.real.service.EventService;
import com.club.real.service.exception.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EventServiceImpl implements EventService {

  private final EventRepository eventRepository; // Injected via constructor

  @Override
  public EventDto createEvent(EventDto eventDto) {
    // Convert DTO to Entity
    Event event = EventMapper.mapToEvent(eventDto);

    // Save the entity to the database
    Event savedEvent = eventRepository.save(event);

    // Convert saved entity back to DTO
    return EventMapper.mapToEventDto(savedEvent);
  }

  @Override
  public EventDto getEventById(Long eventId) {
    Event event = eventRepository.findById(eventId)
        .orElseThrow(() -> new ResourceNotFoundException("Event not found: " + eventId));
    return EventMapper.mapToEventDto(event);

  }

  @Override
  public List<EventDto> getAllEvents() {

    List<Event> events = eventRepository.findAll();
    return events.stream().map((event) -> EventMapper.mapToEventDto(event)).collect(Collectors.toList());
  }

  @Override
  public EventDto updateEvent(Long eventId, EventDto updatedEvent) {

    Event event = eventRepository.findById(eventId).orElseThrow(
        () -> new ResourceNotFoundException("Event not exist : " + eventId));

    event.setDetails(updatedEvent.getDetails());
    Event UpdatedEventObj = eventRepository.save(event);
    return EventMapper.mapToEventDto(UpdatedEventObj);
  }

  @Override
  public void deleteEvent(Long eventId) {
   eventRepository.findById(eventId).orElseThrow(
        () -> new ResourceNotFoundException("Event not exist : " + eventId));

    eventRepository.deleteById(eventId);

  }
}
