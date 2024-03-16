/** IMPORT: MODEL */
import Task from "../models/Task.js";

/** IMPORT: CUSTOM MODULE */
import asyncHandler from "../middleware/asyncHandler.js";

export const createTask = asyncHandler(async (req, res) => {
  await Task.create(req.body);
  res.status(201).json({ message: "Task created successfully" });
});

export const showAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks, count: tasks.length });
});

export const showTask = asyncHandler(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findById(taskID);

  // This error message will show if the id has the correct format/digits of MongoDB ID
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json({ task });
});

export const updateTask = asyncHandler(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findByIdAndUpdate(taskID, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json({ message: "Task updated successfully" });
});

export const deleteTask = asyncHandler(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete(taskID);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json({ message: "Task deleted successfully" });
});
