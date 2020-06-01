const formHandler = require('./formHandler');

test('A valid url input', ()=> {
    expect(formHandler.testURL()).toBe(false);
})