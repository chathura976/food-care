const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//register user============================================================================
const registerUser = asyncHandler(async (req, res, next) => {
  console.log("=====================");

  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.password
  ) {
    res.status(400);
    throw new Error("Name, email,phone,password are required.");
  }
  const email = req.body.email;
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered.");
  }
  //hash password
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  console.log(hashedPassword);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: hashedPassword,
  });
  if (req.file) {
    user.imageUrl = req.file.path;
  }

  console.log(user.imageUrl);
  user
    .save()
    .then((response) => {
      res.json({
        message: "Users uploaded.",
        user: user,
      });
    })
    .catch((error) => {
      res.json({
        message: "Error",
      });
    });
});

//login user======================================================================
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields requeried.");
  }
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          id:user.id,
          name: user.name,
          email: user.email,
          phone:user.phone,
          imageUrl:user.imageUrl,
          password:user.password,
          
<<<<<<< HEAD
=======

          id: user.id,
>>>>>>> 07dfee0f34e2542b01df057d78ac279a5ed13380
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password s incorrecrt.");
  }
});

//current user======================================================================
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
  console.log(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
