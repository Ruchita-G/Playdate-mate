// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

  // add route loads the add.html page, where users can enter new playdates to the db
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  // all route loads the all.html page, where all playdates in the db are displayed
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/all.html"));
  });

  // short route loads the short.html page, where short playdates in the db are displayed
  app.get("/younger", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/younger.html"));
  });

  // long route loads the long.html page, where long playdates in the db are displayed
  app.get("/older", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/older.html"));
  });

};
