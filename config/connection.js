const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "postgres://cyjhehbz:sbhj4xy4py0IgyGAsow-6UQvk9T0QlR5@silly.db.elephantsql.com/cyjhehbz", {
  define: {
    timetamps: true,
    underscored: true,
  },
});

try {
  sequelize.authenticate();
  console.log('Conectado com o ElephantSQL!');
} catch (error) {
  console.error('Anteção, a conexão falhou!:', error);
}

module.exports = { Sequelize, sequelize };