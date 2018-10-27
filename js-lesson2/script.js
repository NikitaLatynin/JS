//Обьекты
let user = {
	name: "Nikita",
	age: 19,
	gender: "male",
	"+": "plus",
	info: {
		skills: "js,HTML"
	}
};

console.log(user);

//Dostup k znacheniu v svoistve
console.log(user["name"]);
console.log(user["+"])
console.log(user.age);
user.age = 9;
console.log(user.age);
user.surname = "Latynin";
console.log(user.surname);
console.log(user.info.skills);

const prob = {
	xy: 29,
	who: 'Ya'
};

console.log('==================');
prob.xy = 30;
console.log(prob.xy);

console.log('==================');
const user2 = user;
user2.name = "Ivan";
console.log(user);

//Massiv
const numberArr = [1, 2, 22, 33];
const stringArr = ["one", "two", "three"];
const objArr = [{name: "Nikita"}, {name: "Ivan"}];
let a = 2;
let b = 3;
const varArr = [a, b];

console.log('==================');
console.log(numberArr);
numberArr[1] = 110;
console.log(numberArr[1]);
console.log(stringArr);
console.log(objArr);
console.log(objArr[0].name);


//Operators
//Unarni: +20
//Binarni: 10+10, a = 2
//Ternarni: uslovni
// Ariphmetic and logic (&&, ||)
let x = 5;
let y = 10;

x = x + 22;
x += 22;// Vauu- cokrachenie 
x *= 22;
x /= 22;
x -= 22;

++x;//Increment
x++;
--x;//Dicrement
x--;

//x % 2 - vozvrashaet ostatok ot deleniya


// Operators of sravneniya
// >, <, >=, <=, ==, !=, ===,!==

//Preobrazovanie tipov
//string: + "", String.
//integer
// -lubie ariphmetic operacii krome +, Number., +"4"====4;
//boolean
//Boolean()

//Uslovnie operatori If-else
//if (user.age > 12) {
//	console.log('Vam mogno smotret film');
//} else {
//	console.log('Vam nelzya smotret film');
//}

const item = {
	price: 250
};

if (item.price <= 150) {
	console.log('Tovar <= 150');
} else if (item.price >= 250) {
	console.log('Tovar >= 250');
};

















