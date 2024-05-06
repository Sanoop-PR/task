const { loginUser, registerUser, logout } = require("../controller/userController");
const { isAuthenticated } = require("../middleware/auth");


const router = require("express").Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").post(logout);


module.exports = router;
