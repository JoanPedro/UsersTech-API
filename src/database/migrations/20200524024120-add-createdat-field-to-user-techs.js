'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'user_techs',
        'created_at',
        {
          type: Sequelize.DATE,
        }
      )
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.removeColumn('user_techs', 'created_at')
  }
};
