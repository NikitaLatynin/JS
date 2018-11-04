// Функции как методы, this, контекст вызова ф-ии
function getName() {
    console.log(this.name);
}

const user = {
    name: "denis",
    getName: getName
}
user.getName();

const user2 = {
    name: "ivan",
    getName: getName
}
user2.getName();
setTimeout(user.getName, 2000);

function foo() {
    console.log(this);
}

foo();

let arr = [1, 2, 5, 3, 12, 10];
let fil = arr.filter(num => num <= 5).sort((prev, next) => prev - next);

console.log(fil);

function getPrice() {
    console.log(this.price);
    return this;
}
function getType() {
    console.log(this.type);
    return this;
}

const furniture = {
    type: 'chair',
    transform: true,
    price: 9,
    getPrice: getPrice,
    getType: getType
}

const louver = {
    type: 'horizontal',
    price: 7
}

//call, apply
getPrice.call(louver);
furniture.getPrice.call(louver);

getPrice.apply(louver);

// furniture
//     .getPrice
//     .getType;

const item = {
    price: 45,
    getPrice: function () {
        return this.price;
    }
}

const item2 = {
    price: 32
}

item2.getPrice = item.getPrice;
console.log(item2.getPrice());































