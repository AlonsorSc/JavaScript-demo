// Простая функция через имя powerOfTwo
function powerOfTwo(num) {
    return num * num;
}
console.log(powerOfTwo(5));

/* Анонимная функция, у неё нет названия, как в обычном случае
Мы взяли функцию и положили её в пенеменную const poft */
const poft = function (num) {
    return num * num;
}
console.log(poft(6));

/* Механика объявления функции и без объявления через const.
В 1 случае результат будет, т.к. функция объявлена после - это называется всплытие*/
console.log(powerOfTwo(5));
function powerOfTwo(num) {
    return num * num;
}
// В 2 случае результата не будет, т.к. функция на момент вызова console.log не объявлена
console.log(poft(6));
const poft = function (num) {
    return num * num;
}
