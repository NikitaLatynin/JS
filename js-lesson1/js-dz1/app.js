//Строки Задачи
let string  = 'some test string';
let first_char = string[0];
let last_char = string[string.length-1];
let a = 20;
let b = 16;


console.log('=============================Строки======================');

//1.
console.log('===========Task 1============');
console.log('First- '+ first_char +'; Last- '+ last_char);

//2.
console.log('===========Task 2============');
console.log('First- '+ first_char.toUpperCase() + '; Last- '+ last_char.toUpperCase());

//3.
console.log('===========Task 3============');
console.log(string.indexOf('string'));

//4.
console.log('===========Task 4============');
console.log(string.indexOf(' ', string.indexOf(' ') + 1));

//5.
console.log('===========Task 5============');
console.log(string.substr(4, 4));

//6.
console.log('===========Task 6============');
console.log(string.slice(4, 9));

//7.
console.log('===========Task 7============');
console.log(string.slice(0, -6));


//8.
console.log('===========Task 8============');
console.log(String(a) + String(b));


console.log('=============================Числа======================');

//1.
console.log('===========Task 1============');
console.log(Math.PI.toFixed(2));

//2.
console.log('===========Task 2============');
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51) + ' - максимальное');
console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51) + ' - минимальное');

//3.
console.log('===========Task 3============');
console.log('A:' + Math.random().toFixed(2));
console.log('B:' + Math.random() * 11);

//4.
console.log('===========Task 4============');
console.log(0.6 + 0.7 == 1.3);
console.log((0.6 * 10 + 0.7 * 10)/10);

//5.
console.log('===========Task 5============');
console.log(parseInt('100$'));























