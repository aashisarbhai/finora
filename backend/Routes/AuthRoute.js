const router = require("express").Router();
const { Signup, Login } = require("../controllers/AuthController");
const {userVerification}= require("../Middlewares/AuthMiddleware");

router.post("/signup", Signup);
router.post("/login", Login);
router.get('/verify',userVerification)

module.exports = router;
