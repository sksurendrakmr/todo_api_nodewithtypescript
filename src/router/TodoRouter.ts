import {Router} from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controller/TodoController';

const router = Router();

router.route("/").get(getTodos).post(createTodo);
router.route("/:id").put(updateTodo).delete(deleteTodo);

export default router;