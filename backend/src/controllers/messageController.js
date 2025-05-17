import cloudinary from "../lib/cloudinary.js";

export const getUsers = async (req, res) => {
  try {
    const { id: otherUserId } = req.params;
    const myid = req.user._id;

    
  } catch (error) {}
};

export const getMessages = async (req, res) => {};

export const sendMessage = async (req, res) => {};
