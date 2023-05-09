'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rate.init({
    day: DataTypes.STRING,
    preschool: DataTypes.INTEGER,
    child: DataTypes.INTEGER,
    adult: DataTypes.INTEGER,
    pensioner: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rate',
  });
  return Rate;
};