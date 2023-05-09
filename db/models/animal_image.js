'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Animal_list, {
        foreignKey: 'animal_id',
        as: 'photo',
      });
    }
  }
  Animal_image.init(
    {
      animal_id: DataTypes.INTEGER,
      image_link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Animal_image',
    }
  );
  return Animal_image;
};
