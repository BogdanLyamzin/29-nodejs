const express = require("express");

const {controllerWrapper, validation} = require("../../middlewares");
const {joiSchema} = require("../../models/user");
const {auth: ctrl} = require("../../controllers");

const router = express.Router();

// POST /api/auth/register
router.post("/register", validation(joiSchema), controllerWrapper(ctrl.register));
// router.post("/signup", ctrl.signup);

router.post("/login", validation(joiSchema), controllerWrapper(ctrl.login));
// router.post("/signin", ctrl.signin);

router.get("/logout", controllerWrapper(ctrl.logout));
// router.get("/signout", ctrl.signout);

module.exports = router;