const axios = require("axios");
const { API_KEY } = process.env;

const getApiInfo = async (req, res) => {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/food/products/search?apiKey=${API_KEY}`
  );
  const apiInfo = apiUrl.data.map((el) => {
    //me trae la propiedad que quiero de la api
    return {
      id: el.id,
      title: el.title,
      image: el.image,
      summary: el.summary,
      aggregateLikes: el.aggregateLikes,
      healthScore: el.healthScore,
      analyzedInstructions: el.analyzedInstructions,
    };
  });
  return apiInfo;
};
