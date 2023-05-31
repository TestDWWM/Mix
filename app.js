// let nom = 'smith';
// let nom2 = 'vommy';
// let nom3 = 'polly';

// console.log(`Si les ${nom} gardent les ${nom2}, qui attrapera les ${nom3} `);

// console.log(process.memoryUsage())

// console.log(process.argv[1])

// console.log(process.env)

const { radiusToArea, sideToArea } = require("./area-exo/shape-area.js");

let r = process.argv[2];
let areaC = radiusToArea(r);

console.log(
  `The area of a circle with the radius ${r}cm is ${areaC}cm squared`
);

let s = process.argv[3];
let areaS = sideToArea(s);

console.log(
  `The area of a square with the side length of ${s}cm is ${areaS}cm squared`
);
