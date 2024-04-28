const express = require("express")
const router = express.Router();

const root = require("./src/routes/root")

router.get("/", root.getRoot);

module.exports = router;