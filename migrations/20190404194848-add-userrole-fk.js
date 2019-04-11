'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users','userRoleId',{
      type: Sequelize.INTEGER,
      references:{
        model:'UserRoles',
        key:'id',
      },
      onUpdate: 'Cascade',
      onDelete: 'SET NULL',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users','userRoleId');
  }
};
