import * as express from 'express';
import { Router } from 'express';
import {
    createLoan,
  getAllLoans,
  getLoanById,
  deleteLoanById
} from '../controllers/loans';

const router: Router = express.Router();

router.get('/', getAllLoans);
router.post('/', createLoan);

router.get('/:id', getLoanById);
router.delete('/:id', deleteLoanById);

export default router;
