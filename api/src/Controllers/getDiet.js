const { Diet } = require("../db");

const getApiInfo = require("./Services/getApiInfo");

const getDiets = async (req, res) => {
  const recipesApi = await getApiInfo(); //trae la informacion de la api

  const types = recipesApi.data.results.map((el) => el.diets); //trae los tipos de dieta de la api
  const dietEach = types.map((el) => {
    //trae los tipos de dieta de cada receta
    for (let i = 0; i < el.length; i++) return el[i];
  });
  console.log(dietEach);
  dietEach.forEach((el) => {
    Diet.findOrCreate({
      //sino encuentra el tipo de dieta en la base de datos la crea
      where: { name: el },
    });
  });
  const allDiets = await Diet.findAll();
  res.send(allDiets);
};

module.exports = getDiets;
