export class Ticket {
  id?: number;
  title: string;
  description: string | null;
  status: 'open' | 'in_progress' | 'closed';
  priority: 'low' | 'medium' | 'high';
  created_at?: Date;
  updated_at?: Date;

  constructor(data: Partial<Ticket>) {
    this.id = data.id;
    this.title = data.title || '';
    this.description = data.description || null;
    this.status = data.status || 'open';
    this.priority = data.priority || 'medium';
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}