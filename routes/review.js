const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../Utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewOwner} = require("../middleware.js")
const reviewController = require("../controllers/review.js")

// Reviews

// Post Route
router.post("/",isLoggedIn,validateReview,
    wrapAsync(reviewController.createReview)
);

// Review delete Route

router.delete("/:reviewId",
    isLoggedIn,
    isReviewOwner,
    wrapAsync(reviewController.destroyReview)
);

module.exports = router;
