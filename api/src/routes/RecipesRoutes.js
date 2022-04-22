const express = require("express");
const getAllRecipes = require("../Controllers/GetAllRecipes");
const getById = require("./../Controllers/getById");
const createRecipe = require("./../Controllers/createRecipe");

const router = express.Router();

router.post("/create", createRecipe);
router.get("/:id", getById);

router.get("/", getAllRecipes);

module.exports = router;
