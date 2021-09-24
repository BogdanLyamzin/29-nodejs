const express = require("express");

const {controllerWrapper, validation} = require("../../middlewares");
const {productSchema} = require("../../schemas");
const {products: ctrl} = require("../../controllers");

const router = express.Router();

router.get("/", controllerWrapper(ctrl.getAll));

router.get("/:id", controllerWrapper(ctrl.getById));

router.post("/", validate(productSchema), controllerWrapper(ctrl.add));

router.put("/:id", validate(productSchema), controllerWrapper(ctrl.updateById));

router.delete("/:id", controllerWrapper(ctrl.removeById));

module.exports = router;