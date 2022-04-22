const getApiInfo = require("./getApiInfo");
const getDbInfo = require("./getDbInfo");

const getTotal = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

module.exports = getTotal;
