const Bartoken = artifacts.require('../contracts/Bartoken.sol');

contract('Bartoken', () => {
    let bartoken;

    beforeEach(async () => {
        bartoken = await Bartoken.new();
    });

    it("should have 18 decimals", async () => {
        let decimals = await bartoken.decimals();
        assert.equal(decimals, 18);
    });

    it("should have BART as symbol", async () => {
        let symbol = await bartoken.symbol();
        assert.equal(symbol, "BART");
    });

    it("should have Bartoken as name", async () => {
        let name = await bartoken.name();
        assert.equal(name, "Bartoken");
    });

    it("should return the good total supply amount", async () =>{
        let totalSupply = await bartoken.totalSupply();
        assert.equal(totalSupply, 50000000000 * 10 ** 18);
    });
});