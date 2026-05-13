import { Router } from 'express';
import { TicketController } from '../controllers/ticketController';

const router = Router();
const ticketController = new TicketController();

router.post('/tickets', ticketController.createTicket.bind(ticketController));
router.get('/tickets', ticketController.getAllTickets.bind(ticketController));
router.get('/tickets/:id', ticketController.getTicketById.bind(ticketController));
router.put('/tickets/:id', ticketController.updateTicket.bind(ticketController));
// router.delete('/tickets/:id', ticketController.deleteTicket.bind(ticketController));

export default router;