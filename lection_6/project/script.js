//TODOS
//1.Добавление задачи
//2.Удаление задачи
//3.Редактирование задачи


//Одна задача - это объект из следующих задач
//id - произвольная уникальная строка
//title - загаловок задачи
//text - текст задачи

let storage = {
    current_todos: [],
    deleted_todos: [],
    current_edit_task: {}
};

//UI Elements
const table = document.querySelector('.table.table-bordered tbody');
const form_col = document.querySelector('.form-col');
const form = document.forms['add-todo-form'];
const input_title = form['title'];
const input_text = form['text'];

//Events
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input_title.value || !input_text.value) return alert_message('Заполните все поля!', 'alert-danger');

    if (storage.current_edit_task.id) {
        //edit
        edit_todo_item(storage.current_edit_task.id, input_title.value, input_text.value);
        reset_edit_todo(storage.current_edit_task.id);
    } else {
        add_new_todo(input_title.value, input_text.value);
        form.reset();
        input_text.disabled = true;
    }
});

input_title.addEventListener('keyup', (e) => {
    input_text.disabled = !input_title.value;
});

table.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-task')) {
        const id = e.target.closest('tr').dataset.todoId;
        delete_todo_item(id);
    }

    if (e.target.classList.contains('edit-task')) {
        const id = e.target.closest('tr').dataset.todoId;
        set_to_edit_todo(id);
    }

    if (e.target.classList.contains('cancel-edit')) {
        const id = e.target.closest('tr').dataset.todoId;
        reset_edit_todo(id);
    }
});


/**
 * generate_id - создает произвольную строку 
 * @returns {string} - новый id
 */
const generate_id = () => {
    const chars = '123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCCVBNM';
    let id = '';
    for(let i = 0; i <= 10; i++) id += chars[Math.floor(Math.random() * chars.length)];
    return id;
}

//Добавление задач
/**
 * add_new_todos -  функция для добавления новых задач
 * @param {String} title - заголовок задачи 
 * @param {String} text - описание задачи
 * @returns {void} 
 */
const add_new_todo = (title, text) => {
    if (!title) return 'Введите заголовок задачи';
    if (!text) return 'Введите текст задачи';

    const new_todo = {title, text, id: generate_id() };

    storage.current_todos.push(new_todo);

    add_new_item_template(new_todo);

    alert_message('Задача добавлена успешно!', 'alert-success');

    return storage.current_todos.slice();
}

/**
 * 
 * @param {*} todo 
 */
const add_new_item_template = todo => {
    const template = create_todo_template(todo);
    table.insertAdjacentHTML('afterbegin', template);
}

/**
 * 
 * @param {*} todo 
 */
const create_todo_template = (todo) => {
    return `
        <tr data-todo-id ="${todo.id}">
            <td class="todo-title">${todo.title}</td>
            <td class="todo-text">${todo.text}</td>
            <td>
                <i class="fas fa-trash-alt mr-1 remove-task"></i>
                <i class="far fa-edit mr-1 edit-task"></i>
                <i class="fas fa-times cancel-edit d-none"></i>
            </td> 
        </tr>
    `;
}

/**
 * delete_todo_item - удаление задачи по  id
 * @param {string} id 
 */
const delete_todo_item = id => {
    if (!id) return console.log('Передайте id удаляемой задачи.');

    const is_confirm = confirm('Удалить задачу?');
    if (!is_confirm) return;

    const check_id = storage.current_todos.some(todo => todo.id === id);
    if (!check_id) return console.log('Передайте id удаляемой задачи.');

    storage.current_todos = storage.current_todos.filter(todo => todo.id !== id);

    delete_todo_from_html(id);

    alert_message('Задача удалена успешно!', 'alert-warning');

    return storage.current_todos;
} 

/**
 * 
 * @param {*} id 
 */
const delete_todo_from_html = id => {
    const target = document.querySelector(`[data-todo-id=${id}]`);
    const target_parent = target.parentElement;
    target_parent.removeChild(target);
}

/**
 * 
 * @param {*} msg 
 * @param {*} class_name 
 */
const alert_message = (msg, class_name) => {
    const current_alert = form_col.querySelector('.alert');
    if (current_alert) form_col.removeChild(current_alert);

    const template = alert_template(msg, class_name);
    form_col.insertAdjacentHTML('afterbegin', template);

    setTimeout(() => {
        const alert = form_col.querySelector('.alert');
        if (alert) form_col.removeChild(alert);
    }, 2000);
}

/**
 * 
 * @param {*} msg 
 * @param {*} class_name 
 */
const alert_template = (msg, class_name) => {
    return `
        <div class="alert fixed-top ${class_name}">${msg}</div>
    `;
}

/**
 * edit_todo_item - редактирование задачи по  id
 * @param {String} id 
 * @param {String} title - новый заголовок задачи 
 * @param {String} text - (необязательно) новый текст задачи
 */
const edit_todo_item = (id, title, text) => {
    if (!id) return console.log('Передайте id редактируемой задачи.');
    if (!title) return 'Введите новый заголовок задачи';
    storage.current_todos.forEach((item) => {
        if (item.id === id) {
            item.title = title;
            item.text = text || item.text;
        } else console.log('Неверный id.');
    });

    edit_todo_template(id, title, text);

    return storage.current_todos;
}

const edit_todo_template = (id, title, text) => {
    const tr = document.querySelector(`tr[data-todo-id="${id}"]`);
    const tdTitle = tr.querySelector('.todo-title');
    const tdText = tr.querySelector('.todo-text');

    tdTitle.textContent = title;
    tdText.textContent = text;
}

/**
 * 
 * @param {*} id 
 */
const set_to_edit_todo = id => {
    if (!id) return console.log('ID is false');

    storage.current_edit_task = storage.current_todos.find(todo => todo.id === id); 
    change_view_for_edit(storage.current_edit_task);
}

/**
 * 
 * @param {*} todo 
 */
const change_view_for_edit = todo => {
    input_title.value = todo.title;
    input_text.value = todo.text;
    input_text.disabled = false;
    form['btn'].textContent = 'Edit task';
    const tr = document.querySelector(`tr[data-todo-id="${todo.id}"]`);
    tr.querySelector('.edit-task').hidden = true;
    tr.querySelector('.cancel-edit').classList.remove('d-none');
}

const reset_edit_todo = (id) => {
    form.reset();
    input_text.disabled = true;
    const tr = document.querySelector(`tr[data-todo-id="${id}"]`);
    tr.querySelector('.edit-task').hidden = false;
    tr.querySelector('.cancel-edit').classList.add('d-none');
    form['btn'].textContent = 'Add task';
    storage.current_edit_task = {};
}













