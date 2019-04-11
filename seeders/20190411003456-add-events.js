'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('event',[{
      eventName:'Circus',
      eventLocation:'Philly',
      eventDate: '1/02/2001',
      createdAt: new Date(),
      updatedAt: new Date(),

      eventName:'Circus',
      eventLocation:'Philly',
      eventDate: '1/02/2001',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('event', null, {});
  }
};
