const db = require("../models");
const GameEntry = db.gameEntries;
const Op = db.Sequelize.Op;

// Add and Save a new Game
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Tutorial
  const gameEntry = {
    title: req.body.title,
    platform: req.body.platform,
    genre: req.body.genre,
    release_date: req.body.release_date,
    no_of_players: req.body.no_of_players,
    publisher: req.body.publisher,
    box_art: req.body.box_art
  };
  // Save Tutorial in the database
  GameEntry.create(gameEntry)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the game."
      });
    });
};

// Retrieve all Games from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    GameEntry.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving games."
        });
      });
};