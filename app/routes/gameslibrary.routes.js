module.exports = app => {
    const gameEntries = require("../controllers/gameslibrary.controller.js");
    
    var router = require("express").Router();
    
    // Add a new Game
    router.post("/", gameEntries.create);
    
    // Retrieve all Games
    router.get("/", gameEntries.findAll);

    app.use('/api/gameEntries', router);
  };