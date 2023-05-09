const router = require('express').Router();
const isAuth = require('../middlewares/isAuth');
const Main = require('../views/pages/Main');
const Animals = require('../views/pages/Animals');
const { Animal_info, Animal_image } = require('../../db/models');
const AnimalInfo = require('../views/pages/AnimalInfo');

router.get('/', async (req, res) => {
  res.render(Main, {});
});

router.get('/animals/:id', async (req, res) => {
  const { id } = req.params;
  const animalInfo = await Animal_info.findOne({ where: { id }, raw: true });
  const animalPhotos = await Animal_image.findAll({
    where: { animal_id: id },
    raw: true,
  });
  console.log(id);
  console.log(animalInfo);
  res.render(AnimalInfo, { animalInfo, animalPhotos });
});

module.exports = router;
