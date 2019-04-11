'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('UserRoles',[{
    role: 'Admin',
    createdAt: new Date(),
    UpdatedAt: new Date(),
  },
  {
    role:'User',
    createdAt: new Date(),
    UpdatedAt:new Date(),
  }],{});
  },
  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('UserRoles',null,{});
  }
};
