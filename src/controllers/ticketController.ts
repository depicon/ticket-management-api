import { Request, Response } from 'express';
import { TicketService } from '../services/ticketService';
import { successResponse, errorResponse } from '../helper/responseHelper';
import { CreateTicketDTO, UpdateTicketDTO } from '../types/ticket.types';

const ticketService = new TicketService();

export class TicketController {
  async createTicket(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateTicketDTO = req.body;

      if (!data.title) {
        errorResponse(res, 'Title is required', 400);
        return;
      }

      const ticket = await ticketService.createTicket(data);
      successResponse(res, ticket, 201);
    } catch (error) {
      errorResponse(res, 'Failed to create ticket ' + error);
    }
  }

  async getAllTickets(req: Request, res: Response): Promise<void> {
    try {
      const tickets = await ticketService.getAllTickets();
      successResponse(res, tickets);
    } catch (error) {
      errorResponse(res, 'Failed to fetch tickets ' + error);
    }
  }

  async getTicketById(req: Request, res: Response): Promise<void> {
    try {

      const idParam = req.params.id

      if (!idParam || typeof idParam !== 'string'){
        errorResponse(res, 'Invalid ticket', 400);
        return;
      }

      const id = parseInt(idParam);

      if (isNaN(id)){
        errorResponse(res, 'Ticket not found', 404);
        return;
      }
      const ticket = await ticketService.getTicketById(id);
      
      if (!ticket) {
        errorResponse(res, 'Ticket not found', 404);
        return;
      }
      
      successResponse(res, ticket);
    } catch (error) {
      errorResponse(res, 'Failed to fetch ticket ' + error);
    }
  }

  async updateTicket(req: Request, res: Response): Promise<void> {
    try {

      const idParam = req.params.id;

      if (!idParam || typeof idParam !== 'string'){
        errorResponse(res, 'Invalid ticket ID', 400);
        return;
      }

      const id = parseInt(idParam);

      if (isNaN(id)){
        errorResponse(res, 'Ticket not found', 404);
        return;
      }

      const data: UpdateTicketDTO = req.body;
      
      const ticket = await ticketService.updateTicket(id, data);
      
      if (!ticket) {
        errorResponse(res, 'Ticket not found', 404);
        return;
      }
      
      successResponse(res, ticket);
    } catch (error) {
      errorResponse(res, 'Failed to update ticket ' + error);
    }
  }

  // async deleteTicket(req: Request, res: Response): Promise<void> {
  //   try {

  //     const idParam = req.params.id;

  //     if (!idParam || typeof idParam !== 'string'){
  //       errorResponse(res, 'Invalid ticket ID', 400);
  //       return;
  //     }

  //     const id = parseInt(idParam);

  //     const deleted = await ticketService.deleteTicket(id);
      
  //     if (!deleted) {
  //       errorResponse(res, 'Ticket not found', 404);
  //       return;
  //     }
      
  //     successResponse(res, deleted);

  //   } catch (error) {
  //     errorResponse(res, 'Failed to delete ticket');
  //   }
  // }
}