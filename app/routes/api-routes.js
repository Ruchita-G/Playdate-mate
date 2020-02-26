// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Playdate = require("../models/playdate.js");

// Routes
// =============================================================
module.exports = function (app) {
  // Get all playdates
  app.get("/api/all", function (req, res) {
    Playdate.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  // Get a specific playdate
  app.get("/api/:playdate", function (req, res) {
    // if (req.params.playdate) {
      Playdate.findAll({
        where: {
          name: req.params.playdate
        }
      }).then(function (results) {
        res.json(results);
      });
    //}
  });

  // Get all playdates of a specific gender
  app.get("/api/gender/:gender", function (req, res) {
    Playdate.findAll({
      where: {
        gender: req.params.gender
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  // Get all playdates from a specific age
  app.get("/api/age/:age", function (req, res) {
    Playdate.findAll({
      where: {
        age: req.params.age
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  // Get all playdates from a specific zipcode
  app.get("/api/zipcode/:zipcode", function (req, res) {
    Playdate.findAll({
      where: {
        zipcode: req.params.zipcode
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  // Get all Older playdates (playdates 10 age or more)
  app.get("/api/playdates/older", function (req, res) {
    Playdate.findAll({
      where: {
        age: {
          $gte: 10
        }
      },
      // order: [["age", "DESC"]]
    }).then(function (results) {
      res.json(results);
    });
  });

  // Get all Younger playdates (playdates 10 age or less)
  app.get("/api/playdates/younger", function (req, res) {
    Playdate.findAll({
      where: {
        age: {
          $lte: 10
        }
      },
      // order: [["age", "ASC"]]
    }).then(function (results) {
      res.json(results);
    });
  });

  // Add a playdate
  app.post("/api/new", function (req, res) {
    console.log("Playdate Data:");
    console.log(req.body);
    Playdate.create({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      zipcode: req.body.zipcode
    }).then(function (results) {
      res.json(results);
    });
  });

  // Delete a playdate
  app.delete("/api/playdate/:id", function (req, res) {
    console.log("Playdate ID:");
    console.log(req.params.id);
    Playdate.destroy({
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.end();
    });
  });
};
