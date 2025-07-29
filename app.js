const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;

console.log('Смогу ли я работать? ' + (availableHours > projectHours));
console.log('Стоимость работ: ' + projectHours * payRateUSD + '$');



const projectName = 'cайт магазина';
const price = 2000;
const author = 'Василий Пупкин';

const template2 = `${author} заказал ${projectName} по цене ${price} руб`;
console.log(template2);

const template3 = 'Проект \n' + 'Цена: ' + price + '$';
console.log(template3);

const template4 = `Проект
Цена: ${price}$`;
console.log(template4);

