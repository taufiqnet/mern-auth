const userService = require("../services/signup");

async function createUser(req, res) {
    try {
        const userData = req.body;
        const user = await userService.createdUser(userData);
        res.status(201).json({ user: user, message: "User created successfully" });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(400).json({ message: error.message });
    }
}

module.exports = { createUser };
