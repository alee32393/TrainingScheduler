'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('event', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    eventName: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    models.Event.belongsTo(models.userroles,{
      foreignKey: 'userId',
      sourceKey: 'id',
    })
  };
  return Event;
};