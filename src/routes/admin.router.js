const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const isAuth = require('../middlewares/isAuth');
const checkTarifs = require('../middlewares/checkTarifs');
const { Admin, Rate } = require('../../db/models');
const Layout = require('../views/admin/Login');
const Login = require('../views/admin/Login');
const Registration = require('../views/admin/Register');
const Profile = require('../views/admin/Profile');
const Edituser = require('../views/admin/Edituser');

router.get("/", (req, res) => {
  res.render(Layout, {});
});

// ручка перехода к форме авторизации
router.get("/login", (req, res) => {
  res.render(Login, {});
});

// ручка перехода к форме регистрации
router.get('/newuser', (req, res) => {
  res.render(Registration, {});
});

// ручка перехода к профилю пользователя
router.get("/profile", isAuth, async (req, res) => {
  const userId = req.session.user.id;
  const user = await Admin.findOne({ where: { id: userId }, raw: true });

  const otherUser = await Admin.findAll({
    where: {
      [Op.not]: [{ id: userId }],
    },
    order: [['user_name', 'ASC']],
    raw: true,
  });
  res.render(Profile, { user, otherUser });
});

// ручка перехода к окну редактирования пользователя
router.get('/profile/:id', isAuth, async (req, res) => {
  const userId = req.params.id;
  const oneUser = await Admin.findOne({ where: { id: userId }, raw: true });

  res.render(Edituser, { oneUser });
});

// ручка редактирования пользователя
router.put('/:id', isAuth, async (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  try {
    await Admin.update(
      {
        user_name: name,
        email,
      },
      { where: { id: userId }, raw: true }
    );

    if (Number(userId) === Number(req.session.user.id)) {
      const user = await Admin.findOne({ where: { id: userId }, raw: true });
      req.session.user = user;
    }
    res.json({ msg: 'Данные пользователя обновлены' });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// ручка добавления нового пользователя
router.post("/newuser", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await Admin.findOne({ where: { email } });
    if (user) {
      res.json({ msg: "Пользователь с такой почтой уже существует" });
    } else {
      const hashPass = await bcrypt.hash(password, 10);
      const newUser = await Admin.create({
        user_name: name,
        email,
        password: hashPass,
      });
      // req.session.user = newUser;
      res.json(newUser);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// авторизация пользователя
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Admin.findOne({ where: { email } });
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);
      if (passCheck) {
        req.session.user = user;
        res.json({ msg: "Успешно вошли в систему!", userName: user.user_name });
      } else {
        res.json({ msg: "Неверный пароль!" });
      }
    } else {
      res.json({
        msg: "Пользователь с такими данными не найден, зарегистрируйтесь !",
      });
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// изменение тарифов
router.post('/tarifs', async (req, res) => {
  try {
    const data = req.body;

    const weekDay = {
      day: 'weekday',
      preschool: data.weekdayPreschool,
      child: data.weekdayChild,
      adult: data.weekdayAdult,
      pensioner: data.weekdayPensioner,
    };

    const weekEnd = {
      day: 'weekend',
      preschool: data.weekendPreschool,
      child: data.weekendChild,
      adult: data.weekendAdult,
      pensioner: data.weekendPensioner,
    };

    const weekDayChange = await Rate.update(
      {
        preschool: weekDay.preschool,
        child: weekDay.child,
        adult: weekDay.adult,
        pensioner: weekDay.pensioner,
      },

      {
        where: { day: weekDay.day },
        raw: true,
      }
    );
    const weekEndChange = await Rate.update(
      {
        preschool: weekEnd.preschool,
        child: weekEnd.child,
        adult: weekEnd.adult,
        pensioner: weekEnd.pensioner,
      },

      {
        where: { day: weekEnd.day },
        raw: true,
      }
    );

    if (weekDayChange && weekEndChange) {
      console.log('Тарифы обновлены!!!');
      router.use(checkTarifs);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// ручка выхода пользователя из системы
router.get('/logout', (req, res) => {
  console.log("it's LOGOUT rout!");
  req.session.destroy((e) => {
    if (e) {
      console.log(e);
      return;
    }
    res.clearCookie("ZooCookie");
    res.redirect("/");
  });
});

// * Ручка удаления Usera
router.get('/killer/:id', isAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const users = await Admin.findAll({ raw: true });

    if (users.length > 1 && Number(id) !== req.session.user.id) {
      await Admin.destroy({ where: { id } });
    }
    res.redirect('/admin/profile');
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
