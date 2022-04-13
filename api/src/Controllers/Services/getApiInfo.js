const axios = require("axios");
const { API_KEY } = process.env;

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
  );
  const apiInfo = apiUrl.data.map((el) => {
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
