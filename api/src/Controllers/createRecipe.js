const { Recipe, Diet } = require("../db");

const createRecipe = async (req, res) => {
  const {
    title,
    summary,
    aggregateLikes,
    healthscore,
    analyzedInstructions,
    image,
    diets,
    createdInDb,
  } = req.body;
  const newRecipe = await Recipe.create({
    title,
    summary,
    aggregateLikes,
    healthscore,
    analyzedInstructions,
    image,
  });
  const dietDb = await Diet.findAll({
    // dentro de este metodo se busca la informacion de la base de datos
    where: { name: diets },
  });
  newRecipe.addDiet(dietDb); //agrega la dieta de  la base de datos a la receta
  res.send("Receta creada exitosamente");
};

module.exports = createRecipe;
