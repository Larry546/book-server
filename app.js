import express from 'express'
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";

import UserController from "./controller/user.js";
import BookListController from "./controller/booklist.js";
import FollowController from "./controller/follow.js";
import LikeBookController from "./controller/likebook.js";
import LikeListController from "./controller/likelist.js";
import ReviewController from "./controller/review.js";

const DB_URL_STRING = "mongodb+srv://root:sZGDfNnhr8bKQOKe@cs5610-book.bpfuirb.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_URL_STRING)

const app = express();

app.use(cors({credentials: true, origin: ''}));
app.use(session({
  secret: "12345-67890-98765-54321",
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}))
app.use(express.json());

app.get('', (req, res) => {
  res.send("Hello World!");
})

UserController(app);
BookListController(app);
FollowController(app);
LikeBookController(app);
LikeListController(app);
ReviewController(app);

app.listen(4000);

