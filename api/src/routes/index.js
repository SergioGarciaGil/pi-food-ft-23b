const express = require("express");

const recipesRouter = require("./RecipesRoutes");
const typesRouter = require("./TypesRoutes");

const router = express.Router();

router.use("/recipes", recipesRouter);

router.use("/types", typesRouter);

module.exports = router;
