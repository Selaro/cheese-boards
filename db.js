const Sequelize = require("sequelize");
const path = new require("path");

const sequelize = new Sequelize({

    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite")
});

module.exports = {Sequelize, sequelize};