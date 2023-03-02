const taskModel = require("../models/TaskAppModel");

module.exports.getTask = async (req, res) => {
  const task = await taskModel.find();
  res.send(task);
};

module.exports.saveTask = async (req, res) => {
  const { text, priority, status } = req.body;

  taskModel.create({ text, priority, status }).then((data) => {
    console.log("Added successfully");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateTask = async (req, res) => {
  const { _id, text, priority, status } = req.body;
  taskModel
    .findByIdAndUpdate(_id, { text, priority, status })
    .then(() => res.send("Updated task"))
    .catch((err) => console.log(err));
};

module.exports.deleteTask = async (req, res) => {
  const { _id } = req.body;
  taskModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted task"))
    .catch((err) => console.log(err));
};
