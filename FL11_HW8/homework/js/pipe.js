function addOne(x) {
    return x + 1;
}
function pipe(a, ...args) {
    let res = a;
    for (let b = 0; b < args.length; b++) {
        res = args[b](res);
    }
    return res;
}

console.log(pipe(1,addOne));
console.log(pipe(1,addOne, addOne));