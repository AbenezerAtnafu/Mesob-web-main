'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class building extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  building.init({
    bldg_name: DataTypes.STRING,
    bldg_type: DataTypes.STRING,
    condition: DataTypes.SMALLINT,
    price: DataTypes.INTEGER,
    price_type: DataTypes.SMALLINT,
    location: DataTypes.STRING,
    desc: DataTypes.TEXT,
    is_sold: DataTypes.SMALLINT,
    views: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'building',
  });
  return building;
};