'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prop_name: {
        type: Sequelize.STRING
      },
      prop_type: {
        type: Sequelize.STRING
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
      bedroom: {
        type: Sequelize.SMALLINT
      },
      bathroom: {
        type: Sequelize.SMALLINT
      },
      is_sold: {
        type: Sequelize.SMALLINT
      },
      size: {
        type: Sequelize.INTEGER
      },
      desc: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('properties');
  }
};