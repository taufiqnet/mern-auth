const User = require("../models/User");
const bcrypt = require("bcryptjs");

async function createAdminAccount() {
    try {
        const existingAdmin = await User.findOne({ email: "admin@example.com"});
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash("admin", 10);
            const newAdmin = new User({
                email: "admin@example.com",
                name: "Admin",
                password: hashedPassword,
                role: "admin"
            });
            await newAdmin.save();
            console.log("Admin account created successfully");
        } else {
            console.log("Admin already exists");
        }
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = createAdminAccount;
