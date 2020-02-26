// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Playdate" model that matches up with DB
var Playdate = sequelize.define("playdate", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  gender: {
    type: Sequelize.STRING
  },
  zipcode: {
    type: Sequelize.STRING
  },
  // timesstapms: false

});

// Syncs with DB
Playdate.sync();

// Makes the Playdate Model available for other files (will also create a table)
module.exports = Playdate;
