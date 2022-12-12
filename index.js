const {User} = require("./User");
const {Board} = require("./Board");
const {Cheese} = require("./Cheese");

User.hasMany(Board);
Board.belongsToMany(Cheese, { through: "CheeseBoard" });
Cheese.belongsToMany(Board, { through: "CheeseBoard" });

module.exports = {User, Board, Cheese};

