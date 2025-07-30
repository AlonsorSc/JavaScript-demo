/* 
Упражнение 5.2. Размещение депозита:
Вася положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц. 
Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года 
после снятия вклада и остаток после покупки.
Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/

const presentValue = 11000;
const annualInterestRate = 0.07;
const numberOfTimes = 12;
const numberOfTimesPeriods = 2;
const homePrice = 13500;

const futureValue = presentValue * (1 + annualInterestRate / numberOfTimes) ** (numberOfTimes * numberOfTimesPeriods);

if (futureValue > homePrice) {
    console.log(`Вася сможет купить дом т.к. накопил ${futureValue} и у него останется ${futureValue - homePrice}$`);
} else {
    console.log(`Вася не сможет купить дом т.к. он накопил ${futureValue} и ему не хватает ${homePrice - futureValue}$ для покупки дома`);
}



