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

let url = process.env.BOOK_DB_CONNECTION_STRING || 'mongodb://localhost:27017/book';

mongoose.connect(url)

const app = express();

app.use(cors({
  credentials: true,
  origin: '*'
}))

app.use(session({
  secret: process.env.BOOK_SESSION_SECRET || "1234567899",
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

app.listen(process.env.PORT || 4000);

