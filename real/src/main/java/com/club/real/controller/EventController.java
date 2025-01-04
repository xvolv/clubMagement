package com.club.real.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.club.real.dto.EventDto;
import com.club.real.service.EventService;

@RestController
@RequestMapping("/api/events")
public class EventController {

  private final EventService eventService; // Constructor injection is recommended
  // Build add event rest api

  public EventController(EventService eventService) {
    this.eventService = eventService;
  }

  @PostMapping
  public ResponseEntity<EventDto> createEvent(@RequestBody EventDto eventDto) {
    // Calling the service to create a new user
    EventDto savedEvent = eventService.createEvent(eventDto);

    // Returning the created Event along with a CREATED status
    return new ResponseEntity<>(savedEvent, HttpStatus.CREATED);
  }
  // build get event rest api

  @GetMapping("{id}")
  public ResponseEntity<EventDto> getEventById(@PathVariable("id") Long eventId) {
    EventDto eventDto = eventService.getEventById(eventId);
    return ResponseEntity.ok(eventDto);

  }

  @GetMapping
  public ResponseEntity<List<EventDto>> getAllEvents() {
    List<EventDto> events = eventService.getAllEvents();
    return ResponseEntity.ok(events);
  }

  // update
  @PutMapping("{id}")
  public ResponseEntity<EventDto> updateEvent(@PathVariable("id") Long eventId, @RequestBody EventDto updatedEvent) {

    EventDto eventDto = eventService.updateEvent(eventId, updatedEvent);

    return ResponseEntity.ok(eventDto);
  }

  // delete
  @DeleteMapping({ "{id}" })
  public ResponseEntity<String> deleteEvent(@PathVariable("id") Long eventId) {
    eventService.deleteEvent(eventId);
    return ResponseEntity.ok("Event Deleted succesfully");
  }


}
