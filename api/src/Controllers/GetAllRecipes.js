const getTotal = require("./Services/getTotal");

const getAllRecipes = async (req, res) => {
  const title = req.query.title;
  const allData = await getTotal();

  try {
    if (title) {
      let recipeTitle = await allData.filter((recipe) =>
        recipe.title
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(title.toLowerCase().split(" ").join(""))
      );

      recipeTitle.length != 0
        ? res.status(200).json(recipeTitle)
        : res.status(404).send("Recipe does not exist");
    } else res.status(200).json(allData);
  } catch (err) {
    res.json({ err: message });
  }
};

module.exports = getAllRecipes;
