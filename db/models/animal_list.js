"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Animal_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Animal_image, { foreignKey: "animal_id" });
      this.hasOne(models.Animal_info, { foreignKey: "animal_id" });
    }
  }
  Animal_list.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      photo_link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Animal_list",
    }
  );
  return Animal_list;
};
