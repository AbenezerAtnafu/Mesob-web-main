'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class machinery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  machinery.init({
    mach_name: DataTypes.STRING,
    build_year: DataTypes.STRING,
    location: DataTypes.STRING,
    condition: DataTypes.SMALLINT,
    price: DataTypes.INTEGER,
    price_type: DataTypes.SMALLINT,
    desc: DataTypes.TEXT,
    is_sold: DataTypes.SMALLINT,
    views: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'machinery',
  });
  return machinery;
};