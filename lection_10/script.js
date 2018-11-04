//bind
let user = {
    name: 'Nikita',
    age: 19,
    getName: function () {
        console.log(this.name)
    },
    getAge: function () {
        console.log(this.age)
    }
};

let user2 = {
    name: 'ivan',
    age: '67'
};

user.getAge = user.getAge.bind(user);
// user.getAge.call(user2);
setTimeout(user.getAge, 2000);

// document.addEventListener('click', function(e) {
//     console.log(this);
// });

// document.addEventListener('click', (e) => {
//     console.log(this);
// });

let obj = {
    info: 'some info',
    setEvent: function () {
        document.addEventListener('click', (e) => {
            console.log(this);
        });
    }
}

obj.setEvent();

//closures
let val = 10;
let text = 'hello';

function getName(name) {
    let first = 'my name is ';
    return first + name;
}

getName('nikita');





