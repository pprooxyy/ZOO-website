"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Rates",
      [
        {
          day: "weekday",
          preschool: 0,
          child: 100,
          adult: 300,
          pensioner: 200,
        },
        {
          day: "weekend",
          preschool: 0,
          child: 150,
          adult: 400,
          pensioner: 250,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Rates", null, {});
  },
};
