//Functions declaration
//function sum() {
//    let a = 10;
//    let b = 20;
//    let c = a + b;
//    console.log(c);
//}

//sum();

//Function expression
const minus = function () {
    let a = 10;
    let b = 20;
    let c = a - b;
    console.log(c);
}

minus();

//Function arguments
function sum(x = 0, y = 0) {
    console.log(arguments);
    let c = x + y;
    return c;
}

sum(219, 121);
sum();
let funcRes = sum();
console.log(funcRes);

//Область видимости
let z = "global";

function multy(x  = 1, y = 1, z = 5) {
    console.log('Local', z);
    z = x * y;
    return z;
}

multy();
console.log(z);


//Massiv methods
console.log('============');
let str = 'some text';
let array = [];

array.push(0, 1, 2);//dobavlyaet v massiv
array.push('0ne');
array.pop();//udalyaet posledni element
//shift - udalyaet pervi; unshift- dobavlyaet v nachalo
const arr = [1, 2, 3, 4, 5, 6, 7];
const newArr = arr.slice(1, 5);
const concatArr = newArr.concat(arr);
const spliceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

spliceArr.splice(0, 2, 'new1', 'new2');

console.log(array);
console.log(array.join('-'));
console.log(str.split());
console.log(newArr);
console.log(concatArr);
console.log(spliceArr);


const items = [
    {
        name: 'Iphone 5',
        price: 100
    },
    {
        name: 'Iphone 4',
        price: 50
    },
    {
        name: 'Iphone 8',
        price: 1000
    },
    {
        name: 'Iphone 4s',
        price: 70
    },
    {
        name: 'Iphone 3',
        price: 20
    },
    {
        name: 'Iphone 7',
        price: 700
    },
    {
        name: 'Iphone x',
        price: 2000
    },
    {
        name: 'Iphone 3g',
        price: 45
    },
    {
        name: 'Iphone 6',
        price: 500
    },
    {
        name: 'Iphone 5s',
        price: 150
    },
];

function filterItemsByPrice(items, min = 1, max = 9999) {
    let result = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].price >= min && items[i].price <= max) {
            result.push(items[i]);
        }
    }
    return result;
}

let filterItems = filterItemsByPrice(items, 100, 600);
console.log(filterItems);
































