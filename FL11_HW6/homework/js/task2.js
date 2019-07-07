const a = parseFloat( prompt('Enter a:') );
const b = parseFloat( prompt('Enter b:') );
const c = parseFloat( prompt('Enter c:') );

const triangle_exist= a<b+c&&b<a+c&&c<a+b;
if (triangle_exist) {
    if (a === b && b === c) {
        console.log('Equivalent triangle');
    } else if (a === b && b !== c || a === c && c !== b) {
        console.log('Isosceles triangle');
    } else if (a !== b && a !== c && b !== c) {
        console.log('Normal triangle')
    }
}else {
    console.log('Triangle doesn’t exist');
}
