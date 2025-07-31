/*
	Пользователь хочет приобрести игру в магазине
	Он может это сделать только если:
	- Eго баланс больше 1000 (balance) 
	или число бонусов больше 100 (bonusBalance)
	- Он не забанен (isBanned)
	- Игра не кулена (isExist)
	- Игра в продаже (isSelling)
	Напишите условие для покупки и выведите в консоль
	результат
*/

const balance = 900;
const bonusBalance = 90;
let isBanned = false;
let isExist = false;
let isSelling = true;
const canBuy = (balance >= 1000 || bonusBalance >= 100) && !isBanned && !isExist && isSelling;

console.log(`Могу купить игру: ${canBuy ? 'Да' : 'Нет'}`);