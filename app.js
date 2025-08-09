const roles = ['user', 'admin', 'manager', 'superuser'];

const url = 'auth/user/login';
const res = url.split('/'); // split разбивает нашу строку url по символу / на массив данных
console.log(res); // (3) ['auth', 'user', 'login']

console.log(roles.join('-')); // конвертирует массив roles в строку. В итоге метод join соединяет 
// элементы массива друг с другом через символ -. Результат: user-admin-manager-superuser
