/** IMPORT: MODEL */
import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  try {
    await Task.create(req.body);
    res.status(201).json({ message: "Task created successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export const showAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export const showTask = (req, res) => {
  res.status(200).json({ message: req.params.id });
};

export const updateTask = (req, res) => {};

export const deleteTask = (req, res) => {};
