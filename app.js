const bmwX3Price = 100000;
const fordFocusPrice = 20000;
const budget = 20000;

let message;
if (budget > bmwX3Price) {
    message = 'BMW';
} else {
    message = 'Велосипед';
}
// Классический метод выводы через if else
console.log(`Я хочу купить ${message}`) 

// Упрощённый вывод через тернарный оператор
console.log(`Я хочу купить ${budget > bmwX3Price ? 'BMW' : 'Велосипед'}`); 

// Тернарный оператор в тернарном операторе
let message2 = budget > bmwX3Price 
    ? 'BMW' 
    : budget > bmwX3Price ? 'Ford' : 'Велосипед'

console.log(`Я хочу купить ${message2}`);