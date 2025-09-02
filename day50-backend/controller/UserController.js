const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../model/UserModel");

let jwt_key = "Batch35BackendKey";

// Register API
const registerAPI = async (req, res) => {
    const { username, email, password, role } = req.body;

    try{
        // Check the user email is already exist or not
        const emailCheck = await User.findOne({ email });
        if(emailCheck){
            return res.status(400).json({message: "User email already registered"});
        }
        // Password hashing using bcrypt library
        const hashedPassword = await bcrypt.hash(password, 10);
        // save all the user information including hashed password
        const newUser = new User({username, email, password: hashedPassword, role});
        await newUser.save();
        res.status(201).json({message: "Registration successful"});
    }catch(err){
        console.error(err.message);        
    }
}

const loginAPI = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email });
        if(!user){
            return res.status(404).json({message: "User email not found, please register first"});
        }

        // password check
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(400).json({message: "unauthorised: Password mismatch"})
        }

        // Token generation
        const token = jwt.sign(
            {userId: user._id, email: user.email, role: user.role},
            jwt_key,
            {expiresIn: '24h'}
        );
        res.status(200).json({message: "Login Successful", token});
    }catch(err){
        console.error(err.message);        
    }
}

module.exports = {registerAPI, loginAPI};