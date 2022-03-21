// adding sequelize package
const Sequelize = require("sequelize");

// adding dotenv
require("dotenv").config();

let sequelize;

// if connected to Heroku it the app will use JAWSDB instead of local host for database
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    // retires databse info from env file
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
