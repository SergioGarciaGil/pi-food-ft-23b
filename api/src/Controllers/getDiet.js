const { Diet } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getDiet = async (req, res) => {
  const result = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );

  try {
    const types = await result.data.results.map((type) => type.diets);
    const diets = types.flat();
    const typeDiets = [...new Set(diets)];

    typeDiets.forEach((diet) => {
      Diet.findOrCreate({
        where: { name: diet },
      });
    });

    const allDiets = await Diet.findAll();
    res.status(200).json(allDiets);
  } catch (error) {
    res.json({ error: message });
  }
};
module.exports = getDiet;
