// Functions
//1.
function multiply() {
    let res = 1;
    if (!arguments.length) return 0;
    for (let i = 0; i < arguments.length; i++) res *= arguments[i];
    return res;
}
console.log(multiply(5, 10, 4));

//3.
function reverseString(str = '') {
    let rev = '';
    for (let i = str.length - 1; i >= 0; i--) rev += str[i];
    return rev;
}

console.log(reverseString('tset'));

//4.
function getCodeStringFromText(str = '') {
    let charArray = [];
    for (let i = 0; i <= str.length - 1; i++) charArray.push(str.charCodeAt(i));
    return console.log(charArray.join(' '));
}

getCodeStringFromText('world');


//Massiv
//1.
function doubleArrayFunc(arr = []) {
    let doubleArray = arr.concat(arr);
    return doubleArray;
}

console.log(doubleArrayFunc([1, 2, 3, 4]));

//2.
function getLastElement(arr = []) {
    let lastElement = arr.slice(arr.length - 1);
    console.log(arr);
    return lastElement.join();
}

console.log(getLastElement([1, 2, 3, 4]));

//3.
function getArray(n = 0) {
    let arr = [];
    for (let i = 1; i <= n; i++) arr.push(i);
    return arr;
}

console.log(getArray(10));

//4.
function changeCollection() {
    for (let i = 0; i < arguments.length; i++) arguments[i].shift();
    return arguments;
}

console.log(changeCollection([1, 2, 3], ['a', 'b', 'c']));







