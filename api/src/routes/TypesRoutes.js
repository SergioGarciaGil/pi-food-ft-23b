const express = require("express");
const getDiets = require("../Controllers/getDiet");
const router = express.Router();

router.get("/", getDiets);

module.exports = router;
