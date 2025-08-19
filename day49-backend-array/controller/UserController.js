const userModel = require("../model/UserModel");

const state = {
    currentUser: null
};

// REGISTER API
const registerUser = (req, res) => {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = userModel.find(data => data.email === email);

    if (existingUser) {
        return res.state(400).json({ message: "User email already registered" });
    }

    const newUser = {
        id: userModel.length ? userModel[userModel.length - 1].id + 1 : 1,
        email,
        password,
        role
    };
    userModel.push(newUser);
    res.status(201).json({ message: "Account created successfully" });
};

// LOGIN API
const loginUser = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Both the fields are required" });
    }
    const loggedUser = userModel.find(
        data => data.email === email && data.password === password
    )
    if (loggedUser) {
        state.currentUser = loggedUser;

        return res.status(200).json({
            message: "Login successfull",
            loggedUser: {
                id: loggedUser.id,
                email: loggedUser.email,
                role: loggedUser.role
            }
        })
    } else {
        return res.status(401).json({ message: "User account not found" });
    }
}

module.exports = {
    registerUser, loginUser, state
}