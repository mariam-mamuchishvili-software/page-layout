export type EventStatus = "upcoming" | "sold_out" | "completed";

export interface EventLocation {
  venue: string;
  city: string;
  country: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  category: string;
  location: EventLocation;
  startDate: string;
  endDate: string;
  capacity: number;
  attendees: number;
  tags: string[];
  organizerId: number;
  status: EventStatus;
}
