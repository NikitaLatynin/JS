//Стелочные функции
const arrowFunc1 = () => {
    //func body
    console.log('hello');
}

arrowFunc1();

const arrowFunc2 = () => (Math.ceil(Math.random() * 10));

const arrowFunc3 = num => (Math.ceil(Math.random() * num));

const arrowFunc4 = (num1, num2) => (Math.ceil(Math.random() * num1 + num2));

const arrowFunc5 = value => {  //DZ
    return {
        value: value,  //mozno prosto value,
        odd: !!(value % 2)
    }
}

const arrowFunc6 = value => ({value: value, odd: !!(value % 2)});

let arr = [2, 3, 1, 12, 32];

//arr.sort(function (prev, next){
//    return prev - next;
//});

arr.sort((prev, next) => prev - next);

//Перебирающие методы
//forEach, filter, map, every/some, reduce

//forEach
let stringArr = ['one', 'two', 'three'];

stringArr.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

//filter
let numberArr = [1, 3, 2, 7, 22, 43];
let resArr = numberArr.filter(num => num <= 10);

//numberArr.forEach(item => {
//    if (item <= 10) resArr.push(item);
//});

console.log(resArr);

//map
let strArr = ['one', 'dfkreg', 'ergergtr'];
let resMap = strArr.map(str => {
    return str.length;
});

console.log(resMap);

//every(все- тогда правда)/some(хотя бы 1)
let mixedArr = [1, 'one', true, 2];

let everyRes = mixedArr.every(value => {
    return typeof value === 'number';
});
console.log(everyRes);

let someRes = mixedArr.some(value => {
    return typeof value === 'number';
});
console.log(someRes);


//reduce
let reduceRec = numberArr.reduce((prev, item) => {
    console.log(prev, item);
    return prev + item;
},0); 

console.log(reduceRec);

let users = [
    {
        name: 'Nikita'
    },
    {
        name: 'Ivan'
    },
    {
        name: 'Sasha'
    }
]

let reduceRec1 = users.reduce((prev, item) => {
    console.log(prev, item);
    return prev + item.name + ',';
},' '); 













