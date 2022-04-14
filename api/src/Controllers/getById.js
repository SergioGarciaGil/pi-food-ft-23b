const getTotal = require("./Services/getTotal");

const getById = async (req, res) => {
  const id = req.params.id;
  const recipesTotal = await getTotal();
  if (id) {
    let recipeId = await recipesTotal.filter((e) => e.id == id);
    recipeId.length
      ? res.status(200).send(recipeId)
      : res.status(404).send("No hay recetas con ese id");
  }
};

module.exports = getById;
