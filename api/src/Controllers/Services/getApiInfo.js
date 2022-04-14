const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
  );
  const apiInfo = apiUrl.data.results.map((el) => {
    return {
      id: el.id,
      title: el.title,
      summary: el.summary,
      aggregateLikes: el.aggregateLikes,
      healthScore: el.healthScore,
      analyzedInstructions: el.analyzedInstructions,
      diets: el.diets,
      image: el.image,
      createdInDb: true,
    };
  });
  return apiInfo;
};
module.exports = getApiInfo;
