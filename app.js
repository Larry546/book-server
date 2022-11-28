import express from 'express'
import mongoose from "mongoose";
import cors from "cors";

import UserController from "./controller/user.js";

const DB_URL_STRING = "mongodb+srv://root:sZGDfNnhr8bKQOKe@cs5610-book.bpfuirb.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_URL_STRING)

const app = express();

app.use(cors());
app.use(express.json());

app.get('', (req, res) => {
  res.send("Hello World!");
})

UserController(app);

app.listen(4000);

