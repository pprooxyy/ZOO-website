const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DEV_DB_URL);

async function checkConnect(req, res, next) {
  try {
    await sequelize.authenticate();
    res.locals.dbConnect = 'БАЗА ДАННЫХ ПОДКЛЮЧЕНА';
    console.log('База данных успешно подключена 👍');
    next();
  } catch (error) {
    console.error('База не подключена 😢', error.message);
    console.log('БАЗА НЕ ПОДКЛЮЧЕНАЯ ==>', error);
    res.send(error);
  }
}
module.exports = checkConnect;
