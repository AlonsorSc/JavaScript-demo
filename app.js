const roles = ['user', 'admin', 'manager', 'superuser']; // user - 0, admin - 1, manager - 2, superuser - 3

// 1. Slice 
// С одним аргументом. Slice не модифицирует исходный массив (его содержание остаётся таким, как было - меняется только результат функции), 
// slice берёт начала элемент начиная с 2 до конца  и кладёт в переменную res, которая даёт результат
// в итоге он выведет (2) ['manager', 'superuser'], всё что начиная со 2 и до конца
const res = roles.slice(2);
console.log(roles); //
console.log(res);

// с несколькими аргументами он берёт изначальный индекс (2) и конечный индекс (3), т.е. со 2 по 3 !(но не включая его)!
// Важно, что первый элемент (как начальный) включается, а второй элемент не включается
// в итоге он выведет только ['manager']
const res2 = roles.slice(2, 3);
console.log(roles); 
console.log(res2);

// (-1) - последний элемент массива, (-2) - два последних элемента массива
const res3 = roles.slice(-1);
console.log(roles); 
console.log(res3);
// два примера одинаковые, разная суть
const res4 = roles.slice(-1); // кусок массива
const res5 = roles[roles.length - 1]; // элемент массива

// от 1 т.е. от admin до -1 т.е. до элемента с конца массива, не включая его - admin и manager (superuser не включается)
const res6 = roles.slice(1, -1);
console.log(res6);

// 2. Splice. Также возвращает измененный элемент, как делает slice, но еще модифицирует исходный массив
// splice отрезает кусок от массива ролей.
const res7 = roles.splice(2);
console.log(res7); // (2) ['manager', 'superuser'] - модифицированный от константы
console.log(roles); // (2) ['user', 'admin'] - исходный массив
// здесь второй аргумент не показывает конечный элемент, он нужен для указания длинны элементов, которые нужно взять
const res8 = roles.splice(2, 1);
console.log(res8); // ['manager'] - c 2 элемента 1 по счёту
console.log(roles); // (3) ['user', 'admin', 'superuser'] - из массива элемент ['manager'] изъялся
// удаляется последний элемент массива
const res9 = roles.splice(-1);
console.log(res9); // в нашем случае ['superuser']
console.log(roles); // (3) ['user', 'admin', 'manager'] исключили из массива ['superuser'], который константа выше забрала

// 3. reverse - переворачивает массив наоборот. Также, как и splice - модифицирует исходный массив
const res10 = roles.reverse();
console.log(res10);
console.log(roles); 

// 4. concat. Метод, необходимый для соеденинеия (конкотинации) нескольких массивов. Новый, который в () добавляет в конец к первоначальному.
const newRoles = ['sysadmin', 'developer'];
const res11 = roles.concat(newRoles); // выбираем через метод (функцию) concat, массив roles будет соеденён с массивом newRoles
console.log(res11); // ['user', 'admin', 'manager', 'superuser', 'sysadmin', 'developer'];
