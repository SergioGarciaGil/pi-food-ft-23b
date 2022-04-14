const express = require("express");

const recipesRouter = require("./RecipesRoutes");

const router = express.Router();

router.use("/recipes", recipesRouter);

module.exports = router;
