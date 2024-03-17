import { Router } from "express";
import taskRoutes from "./tasks.js";

const router = Router();

router.use("/tasks", taskRoutes);

export default router;
