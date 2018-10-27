//Высшие функции
//function highFunc(str, callback) {
  //  callback();
//}

//highFunc('hello', function () {
//    console.log('callback');
//});

setTimeout(function() {
    console.log('Timeout');
}, 2000);

function intervalHandler() {
    console.log('Interval');
}

//setInterval(intervalHandler, 2000);

let numArr1 = [2, 4, 6, 8];
let numArr2 = [1, 3, 5, 7];
let res1 = [];
let res2 = [];

//for (let i = 0, max = numArr1.length; i < max; i++) {
  //  res1.push(numArr1[i] * 10);
//}

//console.log(res1);

//for (let i = 0, max = numArr2.length; i < max; i++) {
//    res2.push(numArr2[i] * 5);
//}

//console.log(res2);

function generateNewArr(arr, num) {
    let res = [];
    for (let i = 0, max = arr.length; i < max; i++) {
        res.push(arr[i] * num);
    }

    return res;
}

console.log(generateNewArr(numArr1, 10));
console.log(generateNewArr(numArr2, 5));

function generateNewArrDevide(arr, num, num2) {
    let res = [];
    for (let i = 0, max = arr.length; i < max; i++) {
        res.push(arr[i] / num * num2);
    }

    return res;
}

function generateNewArrWithCallback(arr, callback) {
    let res = [];
    for (let i = 0, max = arr.length; i < max; i++) {
       let callbackRes = callback(arr[i], i);
       res.push(callbackRes);
    }
    return res;
}

let newArr1 = generateNewArrWithCallback(numArr1, function(item, i) { 
    return item / 2 + '***';
});

let newArr2 = generateNewArrWithCallback(numArr1, function(item, i) { 
    return item + '$$$';
});

console.log(newArr1);
console.log(newArr2);


function checkNum(num, onSuccessCallback, onErrorCallback) {
    let random = Math.ceil(Math.random() * 5);

    if(num === random) {
        return onSuccessCallback(true);
    } else {
        return onErrorCallback(false);
    }

    console.log(random);
}

function onSuccess(bool) {
    console.log('Ты выиграл!');
}

function onError(bool) {
    console.log('Ты проиграл!');
}

checkNum(5, onSuccess, onError);


//Sort
let arrNum3 = [2, 22, 1, 4, 3, 15, 10];

arrNum3.sort(function (prev, next) {
    console.log(prev, next);
    return prev - next;
});

console.log(arrNum3);

let obj = [
    {
        name: 'Nikita',
        age: 19
    },
    {
        name: 'Denis',
        age: 29
    },
    {
        name: 'Nina',
        age: 33
    },
    {
        name: 'Oleg',
        age: 8
    },
    {
        name: 'Wendy',
        age: 18
    }
];

obj.sort(function(prev, next) {
    return prev.age - next.age;
});

console.log(obj);



















