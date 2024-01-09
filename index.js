//imports express, mongoclient
const Express = require("express");
const multer = require("multer");
const cors = require("cors");
// const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const TaskModel = require("./models/Tasks");

//create an instance of an express app

const app = Express();
app.use(Express.json());
//let it use the cors module
app.use(cors());

//add connection string of MongoDB
const CONNECTION_STRING =
  "mongodb+srv://admin:password23@cluster0.xa8usba.mongodb.net/TodoApp?retryWrites=true&w=majority";

//Create a database
// const DATABASENAME = "TodoApp";
let database;

mongoose.connect(CONNECTION_STRING);

//app.listen starts the express app and listens on the given port no.
app.listen(8080, () => {
  console.log("Mongo DB connection is successful!");
});

app.get("/TodoApp/getTasks", async (request, response) => {
  //   TaskModel.find({}, (err, result) => {
  //     if (err) {
  //       console.log(response.json(err));
  //     } else {
  //       response.json(result);
  //     }
  //   });
  let result = await TaskModel.find();
  response.status(200).json(result);
});

app.post("/createTask", async (request, response) => {
  const user = request.body;
  const newTask = new TaskModel(user);
  await newTask.save();
  //   console.log("rep:", response.json());
  response.json(user);
});
