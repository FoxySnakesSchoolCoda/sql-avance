export interface Ticket {
  id: string;
  eventId: string;
  price: number;
  status: 'available' | 'reserved' | 'sold';
}
