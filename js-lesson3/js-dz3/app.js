//Циклы

//1.
let string = "I am in the easycode.";
let resStr = "";

for (let i = 0; i < string.length; i++) {
    if (string[i - 1] === " ") {
        resStr += string[i].toUpperCase();
    } else {
        resStr += string[i];
    }
}

console.log(resStr);

//2.
let str = 'tseb eht ma i';
let res = '';

for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
}

console.log(res);

//3.
let fact = 1;

for (let i = 10; i > 0; i--) {
    fact *= i;
}

console.log(fact);

//5.

let old = 'Javascript is a pretty good language';
let rez = '';

for (let i = 0; i < old.length; i++) {
    if (old[i] === " ") {
        rez += old[i + 1].toUpperCase();
        i++;
        continue;
    } else {
        rez += old[i];
    };
}

console.log(rez);

//6.
for (let i = 1; i <= 15; i++) {
    if (i % 2 === 1) {
        console.log(i);
    };
}