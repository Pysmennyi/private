function getMin (min) {
    let min_arg = min;
    for (let i in arguments) {
        min_arg = min_arg > arguments[i] ? arguments[i] : min_arg;
    }
    return min_arg;
}

console.log (getMin(3, 0, -3));