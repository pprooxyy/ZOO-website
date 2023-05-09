require("@babel/register");
require("dotenv").config();

// const ReactDOMServer = require('react-dom/server');
// const React = require('react');

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");

const session = require("express-session");
const FileStore = require("session-file-store")(session);

// рекварим МИДЛВЕЙРЫ
const dbCheck = require("./src/middlewares/dbCheck");
const checkTarifs = require("./src/middlewares/checkTarifs");
const isAuth = require("./src/middlewares/isAuth");
const checkConnect = require("./src/middlewares/checkConnect");
const ssr = require("./src/middlewares/ssr");

// реквайрим РОУТЫ
const mainRouter = require("./src/routes/main.router");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(ssr); // дополнительная middleware для вызова функции отрисовщика страниц
app.use(morgan("dev"));
app.use(express.json());

// НАЧАЛО конфига Куки
const sessionConfig = {
  name: "TwitterCookie",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? "Секретное слово",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  },
};
app.use(session(sessionConfig)); // Подключаем сессии как middleware.
app.use("/login", (req, res, next) => {
  console.log("session=>", req.session);
  next();
});
// КОНЕЦ конфига Куки

// Импортируем созданныe в отдельныx файлах рутеры.
const mainRoutes = require("./src/routes/main.router");
const adminRoutes = require("./src/routes/admin.router");
const animalsRouter = require("./src/routes/animals.router");

app.use(dbCheck);
app.use(checkTarifs);

// РОУТЫ
app.use("/", mainRoutes);
app.use("/admin", checkConnect, adminRoutes);
app.use("/animals", animalsRouter);
// app.get('*', (req, res) => {
//   res.redirect('/');
// });

app.listen(PORT, () => {
  app.locals.time = new Date();
  setInterval(() => {
    app.locals.time = new Date();
  }, 1000 * 60);
  console.log(`Server started http://localhost:${PORT}`);
});
