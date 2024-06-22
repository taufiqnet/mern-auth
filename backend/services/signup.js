const User = require("../models/User");
const bcrypt = require('bcryptjs');

async function createdUser(userData) {
  const { name, email, password } = userData;
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const createdUser = await User.create({
      name,
      email,
      password: hashedPassword,
  });

  const savedUser = await createdUser.save();
  return savedUser;
}

module.exports = { createdUser };
