'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('machinery', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mach_name: {
        type: Sequelize.STRING
      },
      build_year: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      condition: {
        type: Sequelize.SMALLINT
      },
      price: {
        type: Sequelize.INTEGER
      },
      price_type: {
        type: Sequelize.SMALLINT
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
    await queryInterface.dropTable('machinery');
  }
};