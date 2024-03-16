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

export const showTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findById(taskID);

    // This error message will show if the id has the correct format/digits of MongoDB ID
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ task });
  } catch (err) {
    // This error message will show if the id has the wrong format/digits of MongoDB ID
    res.status(500).json({ message: err });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findByIdAndUpdate(taskID, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndDelete(taskID);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
