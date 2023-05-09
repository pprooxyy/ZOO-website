'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      day: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      preschool: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      child: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      adult: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      pensioner: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rates');
  },
};
