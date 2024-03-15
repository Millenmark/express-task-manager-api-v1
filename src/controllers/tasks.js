export const createTask = (req, res) => {
  res.status(201).json(req.body);
};

export const showAllTasks = (req, res) => {
  res.send("All items");
};

export const showTask = (req, res) => {
  res.status(200).json({ message: req.params.id });
};

export const updateTask = (req, res) => {};

export const deleteTask = (req, res) => {};
