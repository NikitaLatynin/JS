//Ternarni operator
let obj = {
	name: "Nikita",
	age: 19
};

if (obj.age >= 18) {
	console.log('Ok');
} else {
	console.log('No');
};

obj.age >= 18 ? console.log('Ok') : console.log('No');

let x = -1;

//x < 0 ? x = 1 : x === 0 ? x = -1 : x *= 10;// не верно
x = x < 0 ? 1 : -1;// verno

// ! - obratnoe znachenie v boolean
let array = [];
let name = '';

if (!array.length) {
	console.log('Massiv pustoi');
};

if (!name) {
	console.log('Vvedite svoe imya');
};

// Switch case (Pascal: case of)
//switch(peremennaya) {
//	case 10: 
//		kod;
//		break;
//	case 20:
//		kod;
//		break;
//	default(esli nichego ne rabotaet):
//		kod;
//}

let y = 5;

switch(y) {
	case 1:
		console.log('y=1');
		break;
	case 10:
		console.log('y=10');
		break;
	case 20:
		console.log('y=20');
		break;
	default:
		console.log(y);
};


//Циклы
//while, do while, for, for in, for of


//while
//let i = 10;

//while(i++ < 10) {
//	console.log(i);
//};

//while(i--) {
//	console.log(i);
//};

//for
//let i = 100;
//for (let i = 0; i < 10; i++) {
//	console.log(i);
//};

let str = "Hello world";
let res = "";
for (let i = 0; i < str.length; i++) {
//	console.log(str[i] + '*');
	res += str[i] + '*';
}
res = res.slice(0, -1);
console.log(res);

//continue, break
for (let i = 0; i < 10; i++) {
//	if (i === 5) continue;
	if (i === 5) break;
	console.log(i);
}

let usersArray = [
	{
		name: 'Nikita',
		age: 19,
		gender: 'male'
	},
	{
		name: 'Ivan',
		age: 30,
		gender: 'male'
	},
	{
		name: 'Olga',
		age: 28,
		gender: 'female'
	},
	{
		name: 'Maks',
		age: 25,
		gender: 'male'
	},
	{
		name: 'Inna',
		age: 22,
		gender: 'female'
	},
];

let sumMale = 0;
let sumFemale = 0;

for (let i = 0; i < usersArray.length; i++) {
	let currentUser = usersArray[i];
	let currentUserGender = currentUser.gender;
	console.log(currentUserGender);
	if (currentUserGender === "male") {
			sumMale++;
	} else {
			sumFemale++;
	}
}

console.log(sumMale, sumFemale);

//for in dlya objects
let product = {
	brand: 'Apple',
	model: '8',
	price: 1000
};

for (let key in product) {
	console.log(product[key]);
}

for (let index in usersArray) {
	console.log(usersArray[index]);
}

//for of
for (let value of usersArray){
	console.log(value);
}











