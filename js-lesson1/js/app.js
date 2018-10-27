//Эффект хоустинг с var: alert(a) сработает в данном случае; в js var переносится наверх сам по себе; 

//let name = prompt('Enter your name:');//user_name, userName
//let last_name;
//var a = 1;
//const x = 2;
//const y = 5;
//last_name = 'Latynin';

//alert(name);


//console.log('Hello world');
//string
let str = "Hello world!";
console.log(str[1]);
console.log(str.length);//показать кол-во символов в строке
console.log(str+'!');// классика- конкатенация
console.log(str.toUpperCase());//сделать все буквы большими; методы переменную не меняют
console.log(str.toLowerCase());
console.log(str.indexOf('l'));//возвращает индекс символа; если =-1, то ничего не нашел
console.log(str.indexOf('l',5));//найти, начиная с какого-то символа
//lastIndexOf- поиск начинается с конца

console.log('---------------------');
console.log(str.slice(0,3));// вырезание (не включительно)
console.log(str.slice(0,-1));
console.log(str[str.length-1]);

console.log('---------------------');
console.log(String(205));//String делает из чего хочешь в строку


//Number
let x = 2016.1234;
let z = 45;
x = x + z;
//str * x = NaN
console.log(x);
console.log(isNaN('jhgjg'));//isNaN-число ли это?
console.log(isFinite(20));
console.log(parseFloat("20.2px"));
console.log(x.toFixed(2));//
//Math
//округление
console.log(Math.round(5.3));//к ближайшему целому
console.log(Math.floor(5.9));// к меньшему
console.log(Math.ceil(5.1));// к большему
















