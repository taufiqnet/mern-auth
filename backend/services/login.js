const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { generateToken } = require("../utils/jwt");

async function login(email, password) {
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            throw new Error("User not found");
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password); // Await bcrypt.compare
        if (!isPasswordValid) {
            throw new Error("Incorrect Password");
        }
        const token = generateToken(existingUser);
        return token; // Return the token or handle it appropriately
    } catch (error) {
        console.error(error.message);
        throw error; // Re-throw the error to handle it outside the function if needed
    }
}

module.exports = { login };
