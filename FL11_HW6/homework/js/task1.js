
const COR = 2;

const a1 = parseFloat( prompt('Enter a1:') );
const a2 = parseFloat( prompt('Enter a2:') );
const b1 = parseFloat( prompt('Enter b1:') );
const b2 = parseFloat( prompt('Enter b2:') );
const c1 = parseFloat( prompt('Enter c1:') );
const c2 = parseFloat( prompt('Enter c2:') );

let d1 = (a1 + b1) / COR;
let d2 = (a2 + b2) / COR;
let res = c1===d1&&c2===d2;

console.log(res);
