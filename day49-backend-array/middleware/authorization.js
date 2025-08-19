const { state } = require("../controller/UserController");

const alloweduserRole = (req, res, next) => {
    const currentUser = state.currentUser;

    if(!currentUser){
        return res.status(401).json({message: "Please login, then access the request"});
    }

    if(currentUser.role !== "seller"){
        return res.status(403).json({message: "Unauthorized: Access denied"});
    }

    next(); // helper function -> to execute the api request for valid user
}

module.exports = alloweduserRole;