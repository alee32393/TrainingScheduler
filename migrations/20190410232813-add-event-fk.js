'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('event','userId',{
      type: Sequelize.INTEGER,
      references:{
        model:'event',
        key:'id',
      },
      onUpdate: 'Cascade',
      onDelete: 'SET NULL',
  });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('event', 'userId');
  }

};
