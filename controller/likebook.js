import Likebook from "../model/likebook.js";

const likeBook = async (req, res) => {
  const info = req.body;
  if (!info || !req.session['user'] || info.user !== req.session['user']._id) {
    res.sendStatus(403);
    return;
  }

  const result = await Likebook.create(info);
  res.json(result);
}

const unlikeBook = async (req, res) => {
  const id = req.params.lbid;
  const findLike = await Likebook.findById(id);
  if (!findLike || !req.session['user'] || findLike.user.toString() !== req.session['user']._id) {
    res.sendStatus(403);
    return;
  }
  const status = await Likebook.deleteOne(findLike);
  res.json(status);
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

const getUserLikeBook = async (req, res) => {
  const user = req.params.uid;
  const book = req.params.isbn;
  if (!req.session['user'] || req.session['user']._id !== user) {
    res.sendStatus(403);
    return;
  }
  const like = await Likebook.find({user, book})
  res.json(like);
}

export default (app) => {
  app.post('/likebook/like', likeBook);
  app.delete('/likebook/unlike/:lbid', unlikeBook);
  app.get('/likebook/user/:uid/book/:isbn', getUserLikeBook);

  app.get('/getLikeBooksByUser', getLikeBooksByUser);
  app.get('/getLikesByBook', getLikesByBook);
}