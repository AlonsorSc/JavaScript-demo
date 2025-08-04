// Обычная функция
function powerOfTwo(num) {
    return num * num;
}
console.log(powerOfTwo(5));

// Стрелочная функция
const poft = (num) => num * num;
console.log(poft(6));

/* Стрелочная функция можно аргумент без скобки 
То, что до стрелки - аргументы, после стрелки то, 
что функция будет возвращать. */
const poft2 = num => num * num;
console.log(poft2(7));

/* Сайдэфект логирования в обычной и стрелочной функции.
В обычной функции:*/
function powerOfTwo(num) {
    console.log(num);
    return num * num;
}
console.log(powerOfTwo(5));
// В стрелочной функции:
const poft3 = num => {
    console.log(num);
    return num * num;
};
console.log(poft3(8));

// Несколько аргументов стрелочной функции в скобках ()
const poft4 = (num, i) => num * num;
console.log(poft4(7));