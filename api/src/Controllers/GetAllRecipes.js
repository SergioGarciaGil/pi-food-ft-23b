const getTotal = require("./Services/getTotal");

const getAllRecipes = async (req, res) => {
  const title = req.query.title; //preunta si hay un query por title

  const recipesTotal = await getTotal();

  if (title) {
    const recipeTitle = recipesTotal.filter((el) => {
      el.title.toLowerCase().includes(title.toLowerCase());
    });

    console.log(recipeTitle);

    recipeTitle.length //si hay una receta con ese titulo
      ? res.status(200).send(recipeTitle)
      : res.status(404).send("No hay recetas con ese titulo");
  } else {
    res.status(200).send(recipesTotal);
  }
};
module.exports = getAllRecipes;
