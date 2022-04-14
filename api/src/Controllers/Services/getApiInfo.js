const axios = require("axios");
const { API_KEY } = process.env;

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=3d9d0acd33454a90bb35a279a261d8b8&addRecipeInformation=true`
  );
  const apiInfo = apiUrl.data.results.map((el) => {
    return {
      id: el.id,
      title: el.title,
      summary: el.summary,
      aggregateLikes: el.aggregateLikes,
      healthScore: el.healthScore,
      analyzedInstructions: el.analyzedInstructions,
      image: el.image,
      createdInDb: true,
    };
  });
  return apiInfo;
};
module.exports = getApiInfo;
