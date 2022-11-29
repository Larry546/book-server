import Likelist from "../model/likelist.js";

const likeList = async (req, res) => {
  // todo check user
  const uid = "";
  const lid = "";
  const result = await Likelist.create({user: uid, bookList: lid});
  res.json(result);
}

const unlikeList = async (req, res) => {
  // todo check user
  const uid = "";
  const lid = "";
  const result = await Likelist.deleteOne({user: uid, bookList: lid});
  res.json(result);
}

const getLikeListsByUser = async (req, res) => {
  const uid = "";
  const lists = await Likelist.find({user: uid});
  res.json(lists);
}

const getLikesByList = async (req, res) => {
  const lid = "";
  const lists = await Likelist.find({bookList: lid});
  res.json(lists);
}

export default (app) => {
  // todo
  app.post('/likeList', likeList);
  app.delete('/unlikeList', unlikeList);
  app.get('/getLikeListByUser', getLikeListsByUser);
  app.get('/getLikesByList', getLikesByList);
}