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

    test("User can have many boards", async () => {
        const userBoards = await User.create({
            name: "Morales",
            email: "Morales@email.com"
        });

        const cheesyBoard = await Board.create({
            type: "Cheesy",
            description: "Variety Assortment",
            rating: 5
        });

        const stinkyBoard = await Board.create({
            type: "Stinky",
            description: "Stinky Cheese",
            rating: 3
        });

        await userBoards.addBoard(cheesyBoard)
        await userBoards.addBoard(stinkyBoard)
        expect(await userBoards.countBoards()).toEqual(2)
    });

    test("Board can have many Cheeses", async () => {
        const boardCheeses = await Board.create({
            type: "Special",
            description: "Premium Variety",
            rating: 5
        });
        const specialCheese = await Cheese.create({
            title: "pule",
            description: "crumbly"
        });
        const specialCheese2 = await Cheese.create({
            title: "Moose cheese",
            description: "smooth"
        });
        await boardCheeses.addCheese(specialCheese)
        await boardCheeses.addCheese(specialCheese2)
        expect(await boardCheeses.countCheeses()).toEqual(2)
    });
    
})