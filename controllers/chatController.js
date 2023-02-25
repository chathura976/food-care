const express = require("express");
const router = express.Router();
const Chat = require("../models/chatModel");
const asyncHandler = require("express-async-handler");

// Import Socket.IO and set up a connection listener
const io = require("socket.io")();
io.on("connection", (socket) => {
  console.log("A user connected.");
});

// CREATE operation
const createMessage = asyncHandler(async (req, res) => {
  try {
    const chat = new Chat({
      sender_id: req.user.id,
      receiver_id: req.body.receiver_id,
      message: req.body.message,
    });
    await chat.save();

    // Emit a "new message" event with the chat object
    io.emit("new message", chat);

    res.status(201).send(chat);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get a one user chat======================================================================
const getOneChatAllMessagesSender = asyncHandler(async (req, res) => {
  const chat = await Chat.find({
    sender_id: req.user.id,
    receiver_id: req.params.id,
  });

  if (!chat) {
    res.status(404);
    throw new Error("Chat not found");
  }

  res.status(200).json(chat);
});

const getOneChatAllMessagesReceiver = asyncHandler(async (req, res) => {
  const chat = await Chat.find({
    sender_id: req.params.id,
    receiver_id: req.user.id,
  });

  console.log(req.body.id + req.user.id);

  if (!chat) {
    res.status(404);
    throw new Error("Chat not found");
  }

  res.status(200).json(chat);
});

module.exports = {
  createMessage,
  getOneChatAllMessagesSender,
  getOneChatAllMessagesReceiver,
};
