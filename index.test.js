const {sequelize} = require("./db");
const {User, Board, Cheese} = require("./index");

describe("User, Board, Cheese", () => {
    beforeAll(async () => {
        await sequelize.sync({force: true});
    });

    test("Can create users", async () => {
        const testUser = await User.create({
            name: "Edin",
            email: "Edin@email.com"
        });
        expect(testUser.name).toBe("Edin");
        expect(testUser.email).toBe("Edin@email.com");
    });

    test("Can create a board", async () => {
        const testBoard = await Board.create({
            type: "Basic",
            description: "Classic assortment",
            rating: 5
        });
        expect(testBoard.type).toBe("Basic");
        expect(testBoard.description).toBe("Classic assortment");
        expect(testBoard.rating).toEqual(5);
    });

    test("Can create cheese", async () => {
        const testCheese = await Cheese.create({
            title: "Cheddar",
            description: "Sharp"
        });
        expect(testCheese.title).toBe("Cheddar");
        expect(testCheese.description).toBe("Sharp");
    });

})