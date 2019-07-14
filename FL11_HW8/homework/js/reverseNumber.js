function reverseNumber (rev) {
    let start_num = 0;
    let sign = Math.sign(rev);
    rev = Math.abs(rev);

    if ((Number.MAX_SAFE_INTEGER > rev)&&(rev > 0)) {
        while (rev) {
            start_num *= 10;
            start_num += rev % 10;
            rev = Math.floor(rev / 10);
        }
        return start_num * sign;
    } else {
        return 'Nothing to reverse';
    }
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));
