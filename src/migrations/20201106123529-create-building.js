'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('buildings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bldg_name: {
        type: Sequelize.STRING
      },
      bldg_type: {
        type: Sequelize.STRING
      },
      condtion: {
        type: Sequelize.SMALLINT
      },
      price: {
        type: Sequelize.INTEGER
      },
      price_type: {
        type: Sequelize.SMALLINT
      },
      location: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.TEXT
      },
      is_sold: {
        type: Sequelize.SMALLINT
      },
      views: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('buildings');
  }
};