// может быть несколько return
function canAccessWebsite(age) {
    if (age < 18) {
        return false;
    } else {
        return true;
    }
}
console.log(canAccessWebsite(16));

/* Укороченный вариант без else. Если мы попадаем на первый return, то выполнение функции завершается 
если возраст меньше 18, то функция выдаст false и дальше не пойдет. */
function canAccessWebsite(age) {
    if (age < 18) {
        return false;
    }
    /* этот console.log и return true; не выведится, т.к. первый return сработал и мы вернулись из функции. 
    Функция прекращает своё функционирование. */
    console.log('qwe') 
    return true;
}
console.log(canAccessWebsite(16));   

// Через стрелочную функцию
const canAccessWebsite2 = age => age < 18  

// Через стрелочную с тернарным оператором

const canAccessWebsite3 = age => age < 18 ? 'Нет' : 'Да'; 
console.log(canAccessWebsite3(18));
