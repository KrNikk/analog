const express = require("express");
const router = express.Router();
const analogspaceController = require("../controllers/analogspace.controller");


router.post("/", analogspaceController.createAnalogData);
router.get("/", analogspaceController.getAnalogData);
router.get("/:id", analogspaceController.getAnalogDataById);
router.delete("/:id", analogspaceController.deleteAnalogDataById);
router.patch("/:id", analogspaceController.updateAnalogDataById);
module.exports = router;
