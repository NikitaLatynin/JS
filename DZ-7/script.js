//22 prezentation
//1.
/**
 * Проверяет, является ли 2 элемент дочерним 1
 * @param {*} parent 
 * @param {*} child 
 */
const isParent = (parent, child) => {
    console.log(child);
    const realParent = child.parentNode;
    console.log(realParent);
    if (realParent == parent) {
        console.log('True');
    } else console.log('False');
}

//2.
for (let i = 0; i < document.links.length; i++){
    if (!document.links[i].closest('ul')) console.log(document.links[i]);
}

//3.
console.log(document.querySelector('ul').previousElementSibling);
console.log(document.querySelector('ul').nextElementSibling);

//4.
let child = document.querySelector('ul').children;
console.log(child.length);

//23 prezentation
//1.
document.querySelector('ul').classList.add('list');

//2.
let span = document.querySelector('ul').nextElementSibling;
let link = span.nextElementSibling;
link.id = 'link';

//3.
let lis = document.querySelector('ul').children;
for (let i = 0; i < lis.length; i++) {
    if (i === 0 || i % 2 == 0) lis[i].classList.add('item');
}

//4.
let allLinks = document.links;
for (i = 0; i < allLinks.length; i++) allLinks[i].classList.add('custom-link');

//24 prezentation
//1.
for (i = 0; i < 2; i++) document.querySelector('ul').insertAdjacentHTML('beforeend', `<li class = 'new-item'>Item ${i + 5}</li>`);


//2.
for (i = 0; i <= 2; i++) {
    let strong = document.createElement('strong');
    let ul = document.querySelector('ul');
    ul.children[i].insertAdjacentElement('beforeend', strong);
}

//3.
let img = document.createElement('img');
img.src = 'https://amp.thisisinsider.com/images/5a00cb577f986543008b4659-960-657.jpg';
img.alt = 'beautiful picture';
document.body.insertAdjacentElement('afterbegin', img);

//4.
let mark = document.querySelector('mark');
mark.classList.add('green');
mark.insertAdjacentText('beforeend', ' green');

//5.
let list = document.querySelector('ul').children;
let array = [];
let n = 0;
for (let i = list.length - 1; i >= 0; i--) {
    array[n] = list[i].innerHTML;
    n++;
}

for (i = 0; i < array.length; i++) list[i].innerHTML = array[i];








