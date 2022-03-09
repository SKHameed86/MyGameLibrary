module.exports = (sequelize, Sequelize) => {
    const GameEntry = sequelize.define("gameEntry", {
      title: {
        type: Sequelize.STRING
      },
      platform: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      release_date: {
          type: Sequelize.DATEONLY
      },
      no_of_players: {
          type: Sequelize.INTEGER
      },
      publisher: {
          type: Sequelize.STRING
      },
      box_art: {
          type: Sequelize.STRING
      }
    });
    return GameEntry;
  };