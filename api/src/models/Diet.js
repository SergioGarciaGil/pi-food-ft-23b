const { DataTypes } = require("sequelize");
//Exportamos una function que define el modelo
// y le injectamos la conexion a sequelize

module.exports = (sequelize) => {
  //defino el modelo
  sequelize.define("diet", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
