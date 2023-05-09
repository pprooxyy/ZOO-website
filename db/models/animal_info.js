'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Animal_list, {
        foreignKey: 'animal_id',
        as: 'animal',
      });
    }
  }
  Animal_info.init(
    {
      animal_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      coordinates: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Animal_info',
    }
  );
  return Animal_info;
};
