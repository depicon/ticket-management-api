export interface CreateTicketDTO {
  title: string;
  description?: string;
  priority?: 'low' | 'medium' | 'high';
}

export interface UpdateTicketDTO {
  title?: string;
  description?: string;
  status?: 'open' | 'in_progress' | 'closed';
  priority?: 'low' | 'medium' | 'high';
}

export interface TicketResponse {
  id: number;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  created_at: Date;
  updated_at: Date;
}