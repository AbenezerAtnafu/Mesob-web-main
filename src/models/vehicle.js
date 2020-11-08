'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vehicle.init({
    mark: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.STRING,
    gear: DataTypes.STRING,
    fuel: DataTypes.STRING,
    engine: DataTypes.STRING,
    condition: DataTypes.SMALLINT,
    color: DataTypes.STRING,
    price: DataTypes.INTEGER,
    price_type: DataTypes.SMALLINT,
    location: DataTypes.STRING,
    mileage: DataTypes.INTEGER,
    desc: DataTypes.TEXT,
    features: DataTypes.TEXT,
    is_sold: DataTypes.SMALLINT,
    views: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vehicle',
  });
  return vehicle;
};