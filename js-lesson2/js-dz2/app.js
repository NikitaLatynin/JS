//-----------------------Объекты----------------

//1.
console.log('========Task 1========');
let item = {
	product: 'iphone'
};

//2.
console.log('========Task 2========');
let item = {
	product: 'iphone',
	price: 1000,
	currency: 'dollar'
};

//3.
console.log('========Task 3========');
let item = {
    product: 'iphone',
    price: 1000,
    currency: 'dollar',
    details: {
        model: '8 64GB',
        color: 'white'
    }
};


//----------------Присваивание----------------
//1.
a += 10;
b *= 18;
c -= 10;
x += a;
y *= z;
i *= 5 * y;

//2.
x *= x;

//---------------Условные операторы-----------
//0.
let string = "hidden";

if (string = "hidden") {
    string = "visible";
} else {
    string = "hidden";
};

//1 - 3 Task
let x = -1;

if (x = 0) {
    x = 1;
} else if (x < 0) {
    x = "less then zero";
} else if (x > 0) {
    x *= 10;
};

//-------------Преобразование типов-------
let a = 0 || 'string';// a = "string", 0 = false;
let a = 1 && 'string';// a = "string", t.k. on poslednii true;
let a = null || 25; // a = 25, null = false;
let a = null && 25;// a = null, on ne podhodit;
let a = null || 0 || 35;// a = 35, edinstvennoe true v uslovii;
let a = null && 0 && 35;// a = null, pervi false v uslovii;


12 + 14 + '12' = '2612';// pervi '+' - slogenie chisel, vtoroi - preobrazuet chislo 26 v stroku i proishodit
//concatenacia

3 + 2 - '1' = 4;// Operand '-' preobrazuet stroku v chislo

'3' + 2 - 1 = 31;// operand '+' preobrayuet 2 v stroku, poetomu 32,  Operand '-' preobrazuet stroku v chislo

true + 2 = 3;// true = 1, pri slozenii s chislom preobrazuetsya v chislo

+'10' + 1;// poslednii operand + preobrazuet '10' v chislo

undefined + 2 = NaN;//undefined preobrazuetsya v NaN

null + 5 = 5;// null preobrazuetsya v 0

true + undefined = NaN;// pri clogenii s NaN otvet budet NaN