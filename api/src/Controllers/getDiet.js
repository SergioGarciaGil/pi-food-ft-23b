const { Diet } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

// // const getOccupations = async (req, res) => {
// //   const { data } = await axios.get("https://breakingbadapi.com/api/characters");
// //   const occupations = data.map((i) => i.occupation);
// //   const dbOccupation = occupations.flat();
// //   dbOccupation.forEach((i) => {
// //     Occupation.findOrCreate({
// //       where: {
// //         name: i,
// //       },
// //     });
// //   });
// //   const allOccupations = await Occupation.findAll();
// //   return res.status(200).send(allOccupations);
// // };
// const getDiet = async (req, res) => {
//   const dietsApi = await axios.get(
//     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=50`
//   );
//   const diets = dietsApi.data.results.map((el) => el.diets); //aqui me trae muchos  arreglos
//   const occEach = diets.map((el) => {
//     for (let i = 0; i < el.length; i++)
//       //aqui me devuleve cada elemento de  esos arreglos osea desarma todos los arreglos para devolver cada ocupacion
//       return el[i];
//   });
//   console.log(occEach); //aqui guardamos todas las ocupaciones en la base de datos
//   occEach.forEach((el) => {
//     //tomamos cada ocupacion
//     Diet.findOrCreate({
//       //si no lo encuetra lo crea
//       where: { name: el }, //donde el nombre sea este elemento que le estoy mapeando
//       //si quiero traerme mas atributos de la api solo colocamos  el atributo que quiero traer
//     });
//   });
//   const allDiets = await Diet.findAll(); //aqui me trae todas las ocupaciones creadas en la base de datos
//   res.send(allDiets);
// };
// module.exports = getDiet;

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
