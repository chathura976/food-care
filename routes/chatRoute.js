const express = require("express");
const {
  createMessage,
  getOneChatAllMessagesSender,
  getOneChatAllMessagesReceiver,
} = require("../controllers/chatController");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

router.route("/").post(createMessage);
router.route("/sender/:id").get(getOneChatAllMessagesSender);

router.route("/receiver/:id").get(getOneChatAllMessagesReceiver);

module.exports = router;
