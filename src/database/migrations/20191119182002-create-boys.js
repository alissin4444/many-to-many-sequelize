'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('boys', { 
        id: { 
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        status_id: {
          type: Sequelize.INTEGER,
          alloNull: false,
          references: {
            model: "status",
            key: "id",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
          }
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        idade: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('boys');
  }
};
