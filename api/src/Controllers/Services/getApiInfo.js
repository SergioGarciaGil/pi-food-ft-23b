const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=5`
  );
  const apiInfo = apiUrl.data.results.map((el) => {
    return {
      id: el.id,
      title: el.title,
      summary: el.summary,
      dishTypes: el.dishTypes.map((el) => el),
      aggregateLikes: el.aggregateLikes,
      healthScore: el.healthScore,
      analyzedInstructions: el.analyzedInstructions.map((el) => el),
      diets: el.diets.map((el) => el),
      image: el.image,
    };
  });
  return apiInfo;
};
module.exports = getApiInfo;
