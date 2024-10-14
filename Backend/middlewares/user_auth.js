import User from "../models/user_model.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const cookie = req.headers.cookie;

  if (!cookie || !cookie.startsWith('token=')) {
    return res.status(400).json({
      success: false,
      message: "User not found or Login first",
    });
  }

  // Extract the token part from 'token=<jwt_token>'
  const token = cookie.split('=')[1];

  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.user = await User.findById(decode._id); // Assuming the token contains user ID
    next(); // Proceed to the next middleware
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token or authentication failed",
    });
  }
};
