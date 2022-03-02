const GamesLibrary = require("../models/gameslibrary.model.js");

// Add and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    }
    
    // Add a Game
    const game = new GamesLibrary({
        title: req.body.title,
        platform: req.body.platform,
        genre: req.body.genre,
        release_date: req.body.release_date,
        no_of_players: req.body.no_of_players,
        publisher: req.body.publisher,
        box_art: req.body.box_art || false
    });
    
    // Save Game in the database
    GamesLibrary.create(gameEntry, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while adding the Game entry"
        });
        else res.send(data);
    });
};

// Retrieve all Games from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    GamesLibrary.getAll(title, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving games."
        });
        else res.send(data);
    });
};