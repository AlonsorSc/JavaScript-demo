// 1 вариант
const hasLicence = true;
const age = 18;
const isDrunk = false;

let canDrive = hasLicence === true && age>=18 && isDrunk === false ? 'Да' : 'Нет';
console.log(`Можно ли водить машину? ${canDrive}`);