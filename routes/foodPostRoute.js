const express = require("express");
const { getFoodPosts, createFoodPost, updateFoodPost, deleteFoodPost, getOwnFoods, getOwnFood } = require("../controllers/foodPostController");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");
const upload = require("../middleware/uploadFoodImage");

router.use(validateToken);

router.route("/").get(getFoodPosts).post(upload.single("imageUrl"),createFoodPost);

router.route("/ownfood/:id").get(getOwnFood).put(upload.single("imageUrl"),updateFoodPost).delete(deleteFoodPost);

router.route("/ownfood").get(getOwnFoods);


module.exports = router;