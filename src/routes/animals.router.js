const router = require("express").Router();
const Animals = require("../views/pages/Animals");
const { Animal_list } = require("../../db/models");
const multer = require("multer");
const upload = multer({ dest: "./public/data/uploads/" });

router.get("/", async (req, res) => {
  try {
    const animalsArr = await Animal_list.findAll({
      order: [["id", "ASC"]],
      raw: true,
    });
    res.render(Animals, { animalsArr });
  } catch (error) {
    console.log("Ошибка в animals.router при вызове GET /", error);
  }
});

router.delete("/killer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Animal_list.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log("Ошибка в animals.router при вызове DELETE /killer/:id", error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    await Animal_list.update(
      {
        name: data,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.sendStatus(200);
  } catch (error) {
    console.log("Ошибка в animals.router при вызове PUT /", error);
  }
});

router.post("/upload/:id", upload.single("avatar"), async (req, res) => {
  console.log("До ручки дохожу");
  console.log("req.file====>", req.file);
  try {
    if (req.file) {
      const { id } = req.params;
      const { path } = req.file;
      console.log("path===>", path);
      await Animal_list.update(
        {
          photo_link: path.slice(7),
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.sendStatus(200);
    }
  } catch (error) {
    console.log("Ошибка в animals.router при вызове POST /upload", error);
  }
});

module.exports = router;
