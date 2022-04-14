const express = require("express");
const getAllRecipe = require("../Controllers/GetAllRecipes");

const router = express.Router();
router.get("/", getAllRecipe);

module.exports = router;
