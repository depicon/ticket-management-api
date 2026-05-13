import { pool } from '../config/database';
import { Ticket } from '../models/ticket';
import { CreateTicketDTO, UpdateTicketDTO, TicketResponse } from '../types/ticket.types';

export class TicketService {
  async createTicket(data: CreateTicketDTO): Promise<TicketResponse> {
    const query = `
      INSERT INTO tickets (title, description, priority)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const values = [data.title, data.description || null, data.priority || 'medium'];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async getAllTickets(): Promise<TicketResponse[]> {
    const result = await pool.query(
      'SELECT * FROM tickets ORDER BY created_at DESC'
    );
    return result.rows;
  }

  async getTicketById(id: number): Promise<TicketResponse | null> {
    const result = await pool.query('SELECT * FROM tickets WHERE id = $1', [id]);
    return result.rows[0] || null;
  }

  async updateTicket(id: number, data: UpdateTicketDTO): Promise<TicketResponse | null> {
    const fields: string[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const values: any[] = [];
    let paramIndex = 1;

    if (data.title !== undefined) {
      fields.push(`title = $${paramIndex++}`);
      values.push(data.title);
    }
    if (data.description !== undefined) {
      fields.push(`description = $${paramIndex++}`);
      values.push(data.description);
    }
    if (data.status !== undefined) {
      fields.push(`status = $${paramIndex++}`);
      values.push(data.status);
    }
    if (data.priority !== undefined) {
      fields.push(`priority = $${paramIndex++}`);
      values.push(data.priority);
    }

    if (fields.length === 0) {
      return this.getTicketById(id);
    }

    fields.push(`updated_at = CURRENT_TIMESTAMP`);
    values.push(id);

    const query = `
      UPDATE tickets 
      SET ${fields.join(', ')}
      WHERE id = $${paramIndex}
      RETURNING *
    `;

    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  // async deleteTicket(id: number): Promise<boolean> {
  //   const result = await pool.query(
  //     'DELETE FROM tickets WHERE id = $1 RETURNING id', 
  //     [id]
  //   );
  //   return (result.rowCount ?? 0) > 0;
  //   // if (result.rowCount === 0) return false;
  //   // if (result.rowCount > 0) return true;
  //   // else return false;
  // }
}