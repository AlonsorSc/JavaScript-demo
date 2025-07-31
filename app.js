// В случае "и" по умолчанию будет выводится первый операнд.
// Если первый операнд false, то будет выводиться второй операнд.
// Такая же логика работает не только со строками, но и с числами, всё работает по тому же принципу.

console.log('Вася' || 'Олег'); // у и при двух true (т.е. двух имён) выбирается первое
console.log(false || 'Олег'); 
console.log('Вася' || false);
console.log(false || false);

// В случае "или" обязательно оба должны быть true (т.е. два имени)

console.log('Вася' && 'Олег');
console.log(false && 'Олег');
console.log('Вася' && false);
console.log(false && false);

// в данном кейсе а - пустое, он выбирает следующее, т.е. Петю
let a;
const username = a || 'Петя';
console.log(username);

// в данном кейсе b - Марина, т.е. имя, т.е. true. Т.к. выбор между двумя true через "и"
// выбирает первое, т.е. Марину.
let b = 'Марина';
const username2 = b || 'Петя';
console.log(username2);

const isAdmin = true;
const fileName = isAdmin && 'file.mp4';
console.log(fileName);