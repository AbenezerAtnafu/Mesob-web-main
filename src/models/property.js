'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  property.init({
    prop_name: DataTypes.STRING,
    prop_type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    price_type: DataTypes.SMALLINT,
    location: DataTypes.STRING,
    bedroom: DataTypes.SMALLINT,
    bathroom: DataTypes.SMALLINT,
    is_sold: DataTypes.SMALLINT,
    size: DataTypes.INTEGER,
    views:DataTypes.INTEGER,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'property',
  });
  return property;
};