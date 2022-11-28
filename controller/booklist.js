
import BookList from "../model/booklist.js"

const findBookList = async (req, res) => {
  const list = await BookList.find();
  res.json(list);
};