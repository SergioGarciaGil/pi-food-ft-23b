const express = require("express");
const getAllRecipes = require("../Controllers/GetAllRecipes");
const getById = require("./../Controllers/getById");
const createRecipe = require("./../Controllers/createRecipe");

const router = express.Router();

router.get("/", getAllRecipes);

router.post("/", createRecipe);
router.get("/:id", getById);

module.exports = router;
