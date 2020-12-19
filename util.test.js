const { makeRequest } = require('./utilities.js'); 
async function test1() {
    const weapons = await requestData('https://www.dnd5eapi.co/api/equipment-categories/weapon');
    return weapons;
}
test("should give a weapon name", () => {
    
    expect(test1().equipment[0].name).toBe('ff');
});