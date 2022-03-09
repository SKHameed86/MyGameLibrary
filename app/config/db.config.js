module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'P@55w0rd',
  DB: 'games_library_db',
  dialect: 'mysql',
  logging: function() {},
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    socketPath: '/var/run/mysqld/mysqld.sock'
  },
  define: {
    paranoid: true
  }
};