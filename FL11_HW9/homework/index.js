function getNumbers(string) {
    let numbers = [];
    let num = 0;
    for (let letter = 0; letter < string.length; letter++) {
        if (!isNaN(string[letter])) {
            numbers[num] = parseInt(string[letter]);
            num++;
        }
    }
    return numbers;
}

console.log(getNumbers(`string`));
console.log(getNumbers(`n1um3ber95`));

const findTypes = (...args) => {
    let res = {};
    for (let inputs of args) {
        if (res.hasOwnProperty(typeof inputs)) {
            res[typeof inputs] += 1;
        } else {
            res[typeof inputs] = 1;
        }
    }
    return res;
};

console.log(findTypes('number'));
console.log(findTypes(null, 5, 'hello'));

function executeforEach (info, funct) {
    for (let i = 0; i < info.length; i++) {
        funct(info[i]);
    }
}
executeforEach([1,2,3], function(el) {
    console.log(el)
});

function mapArray (info, funct) {
    let arr = [];
    executeforEach(info, function(el) {
        let temp = funct(el);
        arr.push(temp);
    });
    return arr;
}
console.log(mapArray([2, 5, 8], function(el) {
    return el + 3
}));

function filterArray(arr, func){
    let res = [];
    executeforEach(arr, (inputs) => {
        if (func(inputs)) {
            res.push(inputs)
        }
    });
    return res;
}
console.log(filterArray([2, 5, 8], function(el) {
    return el > 3
}));

function showFormattedDate (formatDate) {
    const monthses = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
    let year = formatDate.getFullYear();
    let day = formatDate.getDate();
    let month = monthses[formatDate.getMonth()];
    return 'Date: ' + month + ' ' + day + ' ' + year;
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

function canConvertToDate (inputcheck) {
    let date = new Date(inputcheck);
    return !isNaN(Date.parse(date));
}
console.log(canConvertToDate(`2016-13-18T00:00:00`));
console.log(canConvertToDate(`2016-03-18T00:00:00`));

function daysBetween (dayOne, dayTwo) {
    const second = 1000, minute = 60, day = 1440;
    let res = Math.abs(dayOne - dayTwo);
    res = res / (minute * second * day);
    return Math.round(res);
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

let data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];
function getAmountOfAdultPeople(data) {
    let age = 18;
    let days = 365;
    let array_data = [];
    let ppl_data = [];
    for(let obj of data) {
        array_data.push(obj[' birthday ']);
    }
    ppl_data = filterArray(array_data, function (el) {
        if (daysBetween(Date.now(), new Date(el)) > age * days) {
            return true;
        }
    });
    return ppl_data.length;
}
console.log(getAmountOfAdultPeople(data));

function keys(object){
    let res = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            res.push(key)
        }
    }
    return res;
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

const values = (object) => {
    let res = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            res.push(object[key])
        }
    }
    return res;
};
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));
