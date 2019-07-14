function isIneger(a) {
    if (isNaN(a)) {
        return false;
    }
    a = parseFloat(a);
    return (a | 0) === a;
}
console.log(isIneger(5));
console.log(isIneger(5.1));