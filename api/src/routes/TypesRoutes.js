const express = require("express");
const getDiet = require("../Controllers/getDiet");
const router = express.Router();

router.get("/", getDiet);

module.exports = router;
