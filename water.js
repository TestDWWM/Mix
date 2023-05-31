const convert = require("./convert.js");
const freezingPointCelsieus = 0;
const boilingPointCelsieus = 100;

const freeingPointF = convert.celsiusToFahrenheit(freezingPointCelsieus);
const boilingPointF = convert.celsiusToFahrenheit(boilingPointCelsieus);

console.log(`Freezing point of water in fahrenheit is ${freeingPointF}
Boiling point of water in fahrenheit is ${boilingPointF}`);
