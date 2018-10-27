//Current date

let date = document.querySelector('.budget__title--month');
let current_date = new Date;
let month = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

date.innerHTML = `${month[current_date.getMonth()]} ${current_date.getFullYear() }`;


let storage = {
	income_value: [],
	expenses_value: []
};

//UI Elements
const handler = document.querySelector('.add__type option');
const button = document.querySelector('.add__btn');
const input_description = document.querySelector('input .add__description');
const input_value = document.querySelector('input .add__value');


//Events
button.addEventListener('submit', (e) => {
	e.preventDefault();
	if (!input_description.value || !input_value.value) return alert('Заполните все поля!');
	add_point_balance(input_description.value, input_value.value);
	input_description.value = '';
	input_value.value = '';
});

const generate_id = () => {
    const chars = '123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCCVBNM';
    let id = '';
    for(let i = 0; i <= 10; i++) id += chars[Math.floor(Math.random() * chars.length)];
    return id;
}

const add_point_balance = (description, value) => {
	if (!description) return alert('Введите описание изменения');
    if (!value) return alert('Введите значение');

    const new_point = {description, value, id: generateId()};

    if (handler.selected) {
    	storage.income_value.push(new_point);
    } else storage.expenses_value.push(new_point);

    return storage.current_todos.slice();
}

const add_point_balance_template = new_point => {
	const template = create_point_template(new_point);
    table.insertAdjacentHTML('afterbegin', template);
}

const create_point_template = new_point => {
	return `
		<div class="item clearfix" id="income-0">
	        <div class="item__description">Salary</div>
	        <div class="right clearfix">
	            <div class="item__value">+ 2,100.00</div>
	            <div class="item__delete">
	                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
	            </div>
	        </div>
	    </div>
	`;
}