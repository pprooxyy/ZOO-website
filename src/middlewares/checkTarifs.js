const { Rate } = require('../../db/models');

async function checkTarifs(req, res, next) {
  try {
    const rates = await Rate.findAll({ raw: true });
    res.locals.rates = rates;
    console.log('Данные о тарифах получены!');
    next();
  } catch (error) {
    console.log('Данные о тарифах скачать не удалось!', error);
    res.send(error);
  }
}

module.exports = checkTarifs;
