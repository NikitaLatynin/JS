//document.querySelector('произвольный css selector')  .table tbody, .table.table-bordered tr
//document.querySelectorAll('произвольный css selector') возвращает коллекцию элементов NodeList(снимок элементов)
//(class) getElementsByClassName('class name'); возвращает коллекцию элементов HTMLCollection (живая коллекция)
const template = '<tr><td>' + title + '</td><td>' + text +'</td><td></td> </tr>';
const template1 = `
    <tr>
        <td>${title}</td>
        <td>${text}</td>
        <td></td> 
    </tr>
`;

//table.insertAdjacentHTML()
//beforebegin, afterbegin, beforeend, afterend

const target_parent = target.parentElement;