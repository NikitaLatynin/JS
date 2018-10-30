/**
 * Сделать:
 * 1. ф-ию калькуляции по изменеию на странице
 * 2. написать комменты
 */
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
	point_balance: [],
	income_sum: 0,
	expense_sum: 0,
	summary: 0
};

//UI Elements
const handler = document.querySelector('select');
const button = document.querySelector('.add__btn');
const input_description = document.querySelector('.add__description');
const input_value = document.querySelector('.add__value');
const incomeTable = document.querySelector('.income__list');
const expenseTable = document.querySelector('.expenses__list');



//Events
button.addEventListener('click', (e) => {
	e.preventDefault();
	if (!input_description.value || !input_value.value) return alert('Заполните все поля!');
	add_point_balance(input_description.value, Number(input_value.value), handler.value);
	input_description.value = '';
	input_value.value = '';
});

incomeTable.addEventListener('click', (e) => {
	if (e.target.classList.contains('item__delete--btn')) {
		const id = e.target.closest('.item').id;
		const value = e.target.closest('.item').value;
		storage.income_sum -= value;
		if (isNaN(storage.income_sum)) storage.income_sum = 0; 
		storage.summary -= value;
		delete_point_balance(id);
		sumCalculationHTML();
	}
});

expenseTable.addEventListener('click', (e) => {
	if (e.target.classList.contains('item__delete--btn')) {
		const id = e.target.closest('.item').id;
		const value = e.target.closest('.item').value;
		storage.expense_sum -= value;
		if (storage.expense_sum.isNaN()) storage.expense_sum = 0; 
		storage.summary += value;
		delete_point_balance(id);
		sumCalculationHTML();
	}
});


const generate_id = () => {
    const chars = '123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCCVBNM';
    let id = '';
    for(let i = 0; i <= 10; i++) id += chars[Math.floor(Math.random() * chars.length)];
    return id;
}

const add_point_balance = (description, value, act) => {
	if (!description) return alert('Введите описание изменения');
    if (!value) return alert('Введите значение');

	const new_point = {description, value, act, id: generate_id()};
	
	storage.point_balance.push(new_point);
	add_point_balance_template(new_point);
	sumCalculation(new_point);
	return storage.point_balance.slice();
    
}

const add_point_balance_template = new_point => {
	const income_template = create_income_point_template(new_point);
	const expense_template = create_expense_point_template(new_point);
	if (new_point.act === 'income') {
		incomeTable.insertAdjacentHTML('afterbegin', income_template);
	} else {
		expenseTable.insertAdjacentHTML('afterbegin', expense_template);
	}
}

const create_income_point_template = new_point => {
	return `
		<div class="item clearfix" id='${new_point.id}'>
	        <div class="item__description">${new_point.description}</div>
	        <div class="right clearfix">
	            <div class="item__value">+ ${new_point.value}</div>
	            <div class="item__delete">
	                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
	            </div>
	        </div>
	    </div>
	`;
}

const create_expense_point_template = new_point => {
	return `
		<div class="item clearfix" id='${new_point.id}'>
			<div class="item__description">${new_point.description}</div>
			<div class="right clearfix">
				<div class="item__value">- ${new_point.value}</div>
				<div class="item__delete">
					<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
				</div>
			</div>
		</div>
	`;
}

const delete_point_balance = id => {
	if (!id) console.log('Передайте id');

	const is_confirm = confirm('Вы дейтвительно хотите удалить?');
	if (!is_confirm) return;

	const check_id = storage.point_balance.some(point => point.id === id);
	if (!check_id) return console.log('Неверный id');


	storage.point_balance = storage.point_balance.filter(point => point.id !== id);

	delete_point_from_html(id);

	return storage.point_balance;
}

const delete_point_from_html = id => {
	const deleteElement = document.getElementById(id);
	const deleteElementParent = deleteElement.parentElement;
	deleteElementParent.removeChild(deleteElement);
}


const sumCalculation = new_point => {
	if (new_point.act === 'income') {
		storage.income_sum += new_point.value;
	} else {
		storage.expense_sum += new_point.value;
	}

	storage.summary = storage.income_sum - storage.expense_sum;

	sumCalculationHTML();
}

const sumCalculationHTML = () => {
	if (!storage.summary) {
		document.querySelector('.budget__value').insertAdjacentHTML('afterbegin', `<span>-</span>`);
	} else document.querySelector('.budget__value').insertAdjacentHTML('afterbegin', `<span>+</span>`);

	document.querySelector('.budget__value').innerHTML = `${storage.summary}`;
	document.querySelector('.budget__income--value').innerHTML = `${storage.income_sum}`;
	document.querySelector('.budget__expenses--value').innerHTML = `${storage.expense_sum}`;
}

