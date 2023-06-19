import * as express from 'express';
import { Router } from 'express';
import {
  createTicket,
  getAllTicket,
  getTicketById,
  deleteTicketById
} from '../controllers/tickets';

const router: Router = express.Router();

router.get('/', getAllTicket);
router.post('/', createTicket);

router.get('/:id', getTicketById);
router.delete('/:id', deleteTicketById);

export default router;
