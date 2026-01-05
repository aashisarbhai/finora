const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

// ================= SIGNUP =================
module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;

    if (!email || !password || !username) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const user = await User.create({ email, password, username, createdAt });

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    // ✅ Send only necessary user info to frontend
    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: { username: user.username, email: user.email }, // no password
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


// ================= LOGIN =================
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "All fields are required", success: false });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect email or password", success: false });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect email or password", success: false });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    // ✅ Send user info along with login success
    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: {
        username: user.username,
        email: user.email,
        id: user._id
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};
