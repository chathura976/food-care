const express = require("express");
const { getFoodPosts, createFoodPost, updateFoodPost, deleteFoodPost, getOwnFoods, getOwnFood } = require("../controllers/foodPostController");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");
const upload = require("../middleware/uploadFoodImage");

router.use(validateToken);

router.route("/").get(getFoodPosts).post(upload.array("imageUrls",5),createFoodPost);

router.route("/ownfood/:id").get(getOwnFood).put(upload.array("imageUrls",5),updateFoodPost).delete(deleteFoodPost);

router.route("/ownfood").get(getOwnFoods);


module.exports = router;