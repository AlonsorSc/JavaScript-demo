// Задали функцию logName, которая выводит: Моё имя Никита
function logName() {
    console.log(`Моё имя Никита`);
}
// Вызываем функцию в () нет аргумента, при вызове он не ставится
logName();

// Функция с аргументами name, surename через запятую если аргументов несколько
function logName2(name, surename) {
    console.log(`Моё имя Никита ${name} ${surename}`);
}
logName2('Никита', 'Соловьев');

// Функция с выводом депозита (как пример)
function countDepositSum(depositInUSD, month, rate) {
    const sum = depositInUSD * (1 + rate / 12) ** month;
    return sum;
}
// 1 вариант подсчёта
const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);
// 2 вариант подсчёта
const example2 = countDepositSum(1000, 48, 0.10);
console.log(example2);
// 3 вариант напрямую через console.log
console.log(countDepositSum(1000, 48, 0.10));

// Если мы константу не используем нигде, кроме как для return, можно укоротить запись.
// Т.е. нет промежуточного хранилища для переменных, где лежала бы sum
function countDepositSum(depositInUSD, month, rate) {
    return depositInUSD * (1 + rate / 12) ** month;
}
