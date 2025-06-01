import cloudinary from "../lib/cloudinary.js";
import Message from "../models/messageModel.js";
import { getReceiverSocketId, io } from "../lib/socket.js";
import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    //Get all users except logged in user
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } });

    return res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error getting filtered users", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: otherUserId } = req.params;
    const myId = req.user._id;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receivedId: otherUserId },
        { senderId: otherUserId, receivedId: myId },
      ],
    });
    return res.status(200).json(messages);
  } catch (error) {
    console.log("Error getting all messages", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receivedId } = req.params;
    const senderId = req.user._id;

    let imageUrl;

    if (image) {
      const uploadedResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadedResponse.secure_url;
    }

    const newMessage = new Message({
      senderId,
      receivedId,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    const receiverSocketId = getReceiverSocketId(receivedId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    return res.status(200).json(newMessage);
  } catch (error) {
    console.log("Error creating new message", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};
