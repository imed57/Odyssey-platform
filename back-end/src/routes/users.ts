import * as express from 'express';
import { Router } from 'express';
import { createUser,
    getAllUsers,
    getUserById,
    deleteUserById } from '../controllers/users';

const router: Router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUserById);
router.delete('/:id', deleteUserById);
export default router;
