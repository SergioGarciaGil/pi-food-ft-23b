const { Recipe, Diet } = require("../../db");

const getDbInfo = async () => {
  //trae la informacion de la base de datos
  return await Recipe.findAll({
    include: {
      model: Diet,
      atributes: ["title"],
      through: {
        attributes: [],
      },
    },
  });
};
module.exports = getDbInfo;
