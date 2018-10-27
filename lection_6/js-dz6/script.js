//massiv perebor
//1.
const products = [
    {
        title: 'prod1',
        price: 5.2
    },
    {
        title: 'prod2',
        price: 0.18
    },
    {
        title: 'prod3',
        price: 15
    },
    {
        title: 'prod4',
        price: 25
    },
    {
        title: 'prod5',
        price: 18.9
    },
    {
        title: 'prod6',
        price: 8
    },
    {
        title: 'prod7',
        price: 19
    },
    {
        title: 'prod8',
        price: 63
    }
];

 function filterCollection(arr, min, max) {
     return arr.filter(item => item.price >= min && item.price <= max);
 }

//2.
let numArr = [1, 2, 3, 5, 8, 9, 10];

let res = numArr.map(digit => { 
    return {digit, odd: !!(digit % 2)}
});

//3.
let arr = [12, 4, 50, 1, 0, 18, 40];

let res3 = arr.every(item => item !== 0);

//4.
let strArray = ['yes', 'hello', 'no', 'easycode', 'what'];

let res4 = strArray.some(item => item.length > 3);
console.log(res4);

//5.
let charArr = [
    {
        char: 'a',
        index: 12
    },
    {
        char: 'w',
        index: 8
    },
    {
        char: 'Y',
        index: 10
    },
    {
        char: 'p',
        index: 3
    },
    {
        char: 'p',
        index: 2
    },
    {
        char: 'N',
        index: 6
    },
    {
        char: ' ',
        index: 5
    },
    {
        char: 'y',
        index: 4
    },
    {
        char: 'r',
        index: 13
    },
    {
        char: 'H',
        index: 0
    },
    {
        char: 'e',
        index: 11
    },
    {
        char: 'a',
        index: 1
    },
    {
        char: ' ',
        index: 9
    },
    {
        char: '!',
        index: 14
    },
    {
        char: 'e',
        index: 7
    }
];

function buildStr(arr) {
    arr.sort((prev, next) => prev.index - next.index);
    return arr.reduce((prev, cur) => prev + cur.char);
}

//alternative - не работает
//function build(arr) {
//    let res = '';
//    while (res.length <= arr.length) {
//        let filtered = arr.filter(char => arr.index == res.length - 1);
//        res += filtered.char;
//    }
//    return res;
//}

//console.log(build(charArr));

