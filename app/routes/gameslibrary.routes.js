module.exports = app => {
    const gameLibrary = require("../controllers/gameslibrary.controller.js");
    
    var router = require("express").Router();
    
    // Add a new Game
    router.post("/", gameLibrary.create);
    
    // Retrieve all Games
    router.get("/", gameLibrary.findAll);

    app.use('/api/gameLibrary', router);
  };