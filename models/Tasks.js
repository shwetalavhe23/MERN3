const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const TaskModel = mongoose.model("tasks", TaskSchema);
module.exports = TaskModel;
