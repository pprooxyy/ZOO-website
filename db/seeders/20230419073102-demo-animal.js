"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Animal_lists",
      [
        {
          name: "Кит",
          type: "Млекопитающее",
          photo_link:
            "https://media.istockphoto.com/id/529743649/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BD%D0%B8%D0%B9-%D0%BA%D0%B8%D1%82.jpg?s=612x612&w=0&k=20&c=ZfSnJrfJywNQv0RQ5gtTV1ATthTIuupJTonCRNf3x2Y=",
        },
        {
          name: "Тигр",
          type: "Млекопитающее",
          photo_link:
            "https://avatars.mds.yandex.net/i?id=e4af4b30eb628681216a53ae707bbec9f4e53a8a-4825268-images-thumbs&n=13",
        },
        {
          name: "Медведь",
          type: "Млекопитающее",
          photo_link:
            "https://media.istockphoto.com/id/163639080/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D1%83%D1%80%D1%8B%D0%B9-%D0%BC%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D1%8C.jpg?s=612x612&w=0&k=20&c=1OXDx7l2jj-sLXcxtKfTcn7ocFzT6nhjaU6uyV9dtTc=",
        },
        {
          name: "Барс",
          type: "Млекопитающее",
          photo_link:
            "https://avatars.mds.yandex.net/i?id=f10ce3ee36c0d21fe430bbda13e0fce6-4858813-images-thumbs&n=13",
        },
        {
          name: "Бобер",
          type: "Млекопитающее",
          photo_link:
            "https://avatars.mds.yandex.net/i?id=a5c8a78abc194003387c094764e290c2217683ef-8496961-images-thumbs&n=13",
        },
        {
          name: "Волк",
          type: "Млекопитающее",
          photo_link:
            "https://avatars.mds.yandex.net/i?id=c9850cb55814062818cffe1d7e342ceab2493583-9231626-images-thumbs&n=13",
        },
        {
          name: "Eж",
          type: "Млекопитающее",
          photo_link:
            "https://avatars.mds.yandex.net/i?id=ddb613531eaac564f06208cde4defd0901c2f5e2-9215651-images-thumbs&n=13",
        },
        {
          name: "Енот",
          type: "Млекопитающее",
          photo_link:
            "https://avatars.mds.yandex.net/i?id=f0cc46055fcaf3070a63d847c7661e8f5ba64089-9094970-images-thumbs&n=13",
        },
        {
          name: "Орел",
          type: "Птицы",
          photo_link:
            "https://avatars.mds.yandex.net/i?id=e9fe75f1e58b06ceb0c67e0a16914af86b50ce18-9223201-images-thumbs&n=13",
        },
        {
          name: "Лиса",
          type: "Млекопитающее",
          photo_link:
            "https://avatars.mds.yandex.net/i?id=94b9e2a80f496b8242bc93e171f4f7d475820a4e-9233745-images-thumbs&n=13",
        },
        {
          name: "Песец",
          type: "Млекопитающее",
          photo_link:
            "https://avatars.mds.yandex.net/i?id=35b118ec74abac41414f53f406318f594a4dac30-8285499-images-thumbs&n=13",
        },
        {
          name: "Рысь",
          type: "Млекопитающее",
          photo_link:
            "https://avatars.mds.yandex.net/i?id=7447db056f1f187230aa21981b0c58b129f46617-8988469-images-thumbs&n=13",
        },
        {
          name: "Пчела",
          type: "Насекомые",
          photo_link:
            "https://avatars.mds.yandex.net/i?id=0daa8266b2243d22fa5cbff8128c060b4453f0f7-9303200-images-thumbs&n=13",
        },
        {
          name: "Сова",
          type: "Птицы",
          photo_link:
            "https://avatars.mds.yandex.net/i?id=3bb4a0afb49eb9c251b5cfda79e62e805e5f4f0e-7011736-images-thumbs&n=13",
        },
        {
          name: "Сойка",
          type: "Птицы",
          photo_link:
            "https://avatars.mds.yandex.net/i?id=8361fe31a4a769d144762c51989d127d3b36ea16-4081049-images-thumbs&n=13",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Animal_lists", null, {});
  },
};
