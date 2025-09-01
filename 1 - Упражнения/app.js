/*
	Дан список задач
	const tasks = ['Задача 1'];
	Сделать функции:
	- Добавление задачи в конец
	- Удаление задачи по названию
	- Перенос задачи в начало списка по названию 
	Всегда меняем исходный массив
*/
const tasks = ['Задача 1'];

function createTask(newTask) {
	tasks.push(newTask);
	return tasks;
}

function removeTask(numberTask) {
	const index = tasks.indexOf(numberTask);
	if (index !== -1) {
		tasks.splice(index, 1);
	} else {
		console.log('Задача не найдена');
	}
	return tasks;
}

function moveTaskToStart(taskName) {
	const index2 = tasks.indexOf(taskName);
	if (index2 >= 0) {
		tasks.splice(index2, 1);
		tasks.unshift(taskName);
	}
	return tasks;
}

// добавление задач в конец
console.log(createTask('Задача 2'));
console.log(createTask('Задача 3'));

// // удаление задачи по имени
console.log(removeTask('Задача 2'));

// перемещение задачи в начало списка
console.log(moveTaskToStart('Задача '));
