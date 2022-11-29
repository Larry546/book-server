import BookList from "../model/booklist.js"

const findBookListByUser = async (req, res) => {
  const userId = req.params.uid;
  const lists = await BookList.find({creator: userId});
  res.json(lists);
}

const createBookList = async (req, res) => {
  // todo change the uid way
  const userId = req.params.uid;

  const list = req.body;
  list.creator = userId;
  const result = await BookList.create(list);
  res.json(result);
}

const getBookListById = async (req, res) => {
  const lid = req.params.lid;
  const list = await BookList.findById(lid);
  res.json(list);
}

export default (app) => {
  app.get('/findBookListByUser/:uid', findBookListByUser);
  // todo change the uid way
  app.post('/createBookList/:uid', createBookList);

  app.get('/getBookList/:lid', getBookListById);
}