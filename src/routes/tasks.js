import { Router } from "express";

/** IMPORT: CONTROLLER */
import {
  createTask,
  showAllTasks,
  showTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.js";

const router = Router();

router.route("/").get(showAllTasks).post(createTask);
router.route("/:id").get(showTask).patch(updateTask).delete(deleteTask);

export default router;
