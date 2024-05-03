import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    res
      .status(400)
      .json({ success: false, message: "Not Authorised! Login Again" });
  }

  try {
    const token_decode = jwt.verify(process.env.JWT_SECRET);
    console.log(token_decode);
    req.body.userId = token_decode.id;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

export default authMiddleware;
