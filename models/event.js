'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('event', {
      eventName: DataTypes.STRING,
      eventLocation: DataTypes.STRING,
      eventDate:DataTypes.Date
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    models.Event.belongsTo(models.userRoles,{
      foreignKey: 'userId',
      sourceKey: 'id',
    })
  };
  return Event;
};