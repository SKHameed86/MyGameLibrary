module.exports = app => {
    const tutorials = require("../controllers/gameslibrary.controller.js");
    
    var router = require("express").Router();
    
    // Add a new Game
    router.post("/", gamesLibrary.create);
    
    // Retrieve all Games
    router.get("/", gamesLibrary.findAll);

    app.use('/api/gamesLibrary', router);
  };