import Likebook from "../model/likebook.js";

const likeBook = async (req, res) => {
  // todo check user
  const uid = "";
  const book = "";
  const result = await Likebook.create({user: uid, book});
  res.json(result);
}

const unlikeBook = async (req, res) => {
  // todo check user
  const uid = "";
  const book = "";
  const result = await Likebook.deleteOne({user: uid, book});
  res.json(result);
}

const getLikeBooksByUser = async (req, res) => {
  const uid = "";
  const lists = await Likebook.find({user: uid});
  res.json(lists);
}

const getLikesByBook = async (req, res) => {
  const book = "";
  const lists = await Likebook.find({book});
  res.json(lists);
}

export default (app) => {
  // todo
  app.post('/likeBook', likeBook);
  app.delete('/unlikeBook', unlikeBook);
  app.get('/getLikeBooksByUser', getLikeBooksByUser);
  app.get('/getLikesByBook', getLikesByBook);
}