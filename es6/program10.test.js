[];
const html = require('./program10');

test('Should return empty string for input as empty string:', () => {
  expect(html``).toBe('');
});

test('Should return "</b> says</b>: " for input "" and ""', () => {
  expect(html`<b>${''} says</b>: "${''}"`)
    .toBe('<b> says</b>: ""');
});

test('Should return "<b>Michael says</b>: HTML is fun" for input "Michael" and "HTML is fun"', () => {
  expect(html`<b>${'Michael'} says</b>: "${'HTML is fun'}"`)
    .toBe('<b>Michael says</b>: "HTML is fun"');
});

test('Should return string with invalid characters replaced', () => {
  expect(html`<b>${'Dominic'} says</b>: "${'<HTML> is fun'}"`)
    .toBe('<b>Dominic says</b>: "&lt;HTML&gt; is fun"');
});
