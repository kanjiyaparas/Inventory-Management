import jwt from "jsonwebtoken";

export const sendcookie = (user, res, message, statuscode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
  res
    .status(statuscode)
    .cookie("token", token, {
      httpOnly: true,
      domain: "https://inventory-management-2wmy7jaoi-paras-patels-projects-ebd7dde8.vercel.app",
      maxAge: 30 * 60 * 10000,
      sameSite: "None",
      secure: process.env.NODE_ENV === "production",
    })
    .json({
      success: true,
      message,
       user,
      token
    });
};
