const {User} = require("./User");
const {Board} = require("./Board");
const {Cheese} = require("./Cheese");

User.hasMany(Board);
Board.hasMany(Cheese, { through: "CheeseBoard" });
Cheese.hasMany(Board, { through: "CheeseBoard" });


module.exports = {User, Board, Cheese};

