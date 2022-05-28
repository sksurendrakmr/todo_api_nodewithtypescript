import {Router} from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controller/TodoController';
import { auth } from '../middleware/auth';

const router = Router();

router.route("/").get(auth,getTodos).post(auth,createTodo);
router.route("/:id").put(auth,updateTodo).delete(auth,deleteTodo);

export default router;