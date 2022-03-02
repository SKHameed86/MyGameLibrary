const sql = require("./db.js");

// constructor
const GameLibrary = function(gameEntry) {
  this.title = gameEntry.gameTitle;
  this.platform = gameEntry.gamePlatform;
  this.genre = gameEntry.gameGenre;
  this.release_date = gameEntry.gameReleaseDate;
  this.no_of_players = gameEntry.gameNoOfPlayers;
  this.publisher = gameEntry.gamePublisher;
  this.box_art = gameEntry.gameBoxArt;
};
GameLibrary.create = (newGame, result) => {
  sql.query("INSERT INTO gameLibrary SET ?", newGame, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created gameEntry: ", { id: res.insertId, ...newGame });
    result(null, { id: res.insertId, ...newGame });
  });
};

GameLibrary.getAll = (title, result) => {
  let query = "SELECT * FROM gameLibrary";
  if (title) {
    query += ` WHERE gameTitle LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Games: ", res);
    result(null, res);
  });
};
module.exports = GameLibrary;