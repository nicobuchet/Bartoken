const BartokenContract = artifacts.require('Bartoken');

contract('Bartoken', () => {
    it('Should deploy smart contract properly', async () => {
        const bartokenSmartContract = await BartokenContract.deployed();
            
    })
})