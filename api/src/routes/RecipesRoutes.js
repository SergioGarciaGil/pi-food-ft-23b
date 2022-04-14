const express = require("express");
const getAllRecipes = require("../Controllers/GetAllRecipes");
const getById = require("./../Controllers/getById");

const router = express.Router();

router.get("/", getAllRecipes);
router.get("/:id", getById);

module.exports = router;
