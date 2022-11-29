import Review from "../model/review.js";

const createReview = async (req, res) => {
  // todo check user
  const review = req.body;
  const uid = "";
  review.user = uid;
  const result = await Review.create(review);
  res.json(result);
}

const getReviewsByBook = async (req, res) => {
  const book = "";
  const reviews = await Review.find({book});
  res.json(reviews);
}

const deleteReview = async (req, res) => {
  // todo check user
  const rid = "";
  const result = await Review.findByIdAndDelete(rid);
  res.json(result);
}

export default (app) => {
  app.post('/review', createReview);
  app.get('/getReviewsByBook', getReviewsByBook);
  app.delete('/deleteReview', deleteReview);
}