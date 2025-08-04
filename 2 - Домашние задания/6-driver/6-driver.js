// 1 вариант
const hasLicence = true;
const age = 18;
const isDrunk = false;

switch (true) {
    case hasLicence && age>=18 && !isDrunk:
        console.log('Машину вести может');
        break;
    default:
        console.log('Не может водить машину');
}

// 2 вариант
let canDrive = hasLicence === true && age>=18 && isDrunk === false ? 'Да' : 'Нет';
console.log(`Можно ли водить машину? ${canDrive}`);