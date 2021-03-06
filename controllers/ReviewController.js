const { Service, Review } = require('../db/schema');

// const CreateReview = async (req, res) => {
//   const newReview = new Review({ ...req.body, user_id: req.params.user_id });
//   newReview.save();
//   res.send(newReview);
// };

const CreateReview = async (req, res) => {
  try {
    const review = await Review.create({
      ...req.body,
    });
    res.send(review);
  } catch (error) {
    throw error;
  }
};

// const CreateReview = async (req, res) => {
//   try {
//     const review = new Review({
//       ...req.body,
//       user_id: req.params.user_id,
//       service_id: req.params.service_id,
//       name: req.params.user_name,
//     });
//     await review.save();
//     await Service.findByIdAndUpdate(
//       { _id: req.params.service_id },
//       {
//         $push: {
//           reviews: review,
//         },
//       }
//     );
//     res.send(review);
//   } catch (error) {
//     throw error;
//   }
// };

const GetReviewByService = async (req, res) => {
  try {
    const reviews = await Review.find({ service_id: req.params.service_id });
    res.send(reviews);
  } catch (error) {
    throw error;
  }
};
// const RemoveReview = async (req, res) => {
//   try {
//     await Review.deleteOne({ _id: req.params.review_id });
//     const updatedService = await Service.findByIdAndUpdate(
//       req.params.servcice_id,
//       { $pull: { reviews: { _id: req.params.review_id } } },
//       { upsert: true, new: true }
//     );
//     res.send(updatedService);
//   } catch (error) {
//     throw error;
//   }
// };
const RemoveReview = async (req, res) => {
  try {
    await Review.deleteOne({ _id: req.params.review_id });
    await Service.findOneAndUpdate(
      { _id: req.params.servcice_id },
      { $pull: { reviews: req.params.review_id } },
      { upsert: true, new: true, useFindAndModify: true },
      (err, updatedService) => {
        if (err) {
          throw err;
        }
        res.send(updatedService);
      }
    );
  } catch (error) {
    throw error;
  }
};

const UpdateReview = async (req, res) => {
  try {
    await Review.findByIdAndUpdate(
      req.params.review_id,
      { ...req.body },
      { upsert: true, new: true },
      (err, d) => (err ? err : res.send(d))
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateReview,
  GetReviewByService,
  RemoveReview,
  UpdateReview,
};
