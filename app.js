const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser']; // Массив с одним типом данных
const userInfo = ['Аня', 25]; // Массив с разными типами данных
console.log(roles);

console.log(roles[0]); // выбор конкретной переменной массива через индекс, 1 переменная - 0
console.log(roles.length); // Обратиться к длинне массива
console.log(roles.length - 1); // Обращаемся к последней переменной массива, -1 т.к. начинается с 0

/* at() - метод at для выбора конкретного элемента массива
позволяет использовать отрицательные индексы. Например, roles.at(-1) 
— это последний элемент массива, roles.at(-2) — предпоследний и так далее.
console.log(roles[roles.length - 1]); // "superuser" - обычный выбор
console.log(roles.at(-1));  // "superuser" - через at */
console.log(roles.at(0));

/* Возможность выполнять расчёты и использовать тернарные операторы. 
Нельзя использовать внутри условия if else  */
const usersAge = [2040 - 2022, 20 - '6', 10 > 0 ? 5 : 0];
console.log(usersAge);


// С новым синтаксисом классов. Еще один из вариантов массивов 
const userNames = new Array('Вася', 'Петя', 'Катя');
console.log(userNames);

// Использовать массивы внутри функции нельзя, для этого есть специальные методы
function square(el) {
    return el * el;
}
console.log(square([1, 2, 3]));
