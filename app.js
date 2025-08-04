function toPower(num, power) {
    console.log(typeof power);
	const res = num ** power;
	return res;
}
console.log(toPower(2, 3));

/* В данном примере мы забыли указать вывод второго аргумента функции.
Не заданный второй аргумент является undefined.
Tсли мы число num возведём в степень power, т.е. в undefinder, 
то получим NaN (Not a Number).*/
console.log(toPower(2));

/* Булевая логика и применение оператора нулевого слияния
Для исправления ситуации, когда мы ввели пустой аргумент,
мы применяем оператор нулевого слияния. При помощи ?? если у нас power будет пустой,
тогда он применит 2. Т.к. обычная функци плавующая, то console.log может быть наверху и
отрабатываться. */
function toPower(num, power) {
    const power2 = power ?? 2;
    const res = num ** power2; 
	return res;
}

/* Упрощение предыдущего варианта. 
Т.к. по приоритету идёт сначала оператор нулевого присваивания, то
сначала JS выбирает из power ?? 2, а затем по очереди применяется
присваивание через = и полученный результат присваевается переменной power в зависимости от
того, что пришло в аргумент. Если аргумент power пустой, то будет 2, если цифра, то power = power. */
function toPower2(num, power) {
    power = power ?? 2;
    const res = num ** power; 
	return res;
}
console.log(toPower2(3));

/* Установка дефолтного значения для функции без лишних строк power = power ?? 2; 
Если мы не зададим в выводе функции нужный аргумент, то дефолтный будет 2,
т.к. мы его задали в аргументах функции. */ 
function toPower3(num, power = 2) {
    const res = num ** power; 
	return res;
}
console.log(toPower3(4));
