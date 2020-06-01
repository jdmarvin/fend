const nameChecker = require('./nameChecker');

test('A valid url input', ()=> {
    expect(nameChecker.checkForName('https://www.techradar.com/reviews/google-pixelbook')).toBe(true);
})