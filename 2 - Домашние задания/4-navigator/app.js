// Входные данные
const addressLat = 5;
const addressLong = 10;
const positionLat = 20;
const positionLong = 15;

/* d = √((x₂ - x₁)² + (y₂ - y₁)²) формула для расчёта расстояния между двумя точками по координатам (следствие теоремы Пифагора).
x₁ = positionLat, x₂ = addressLat; y₂ = addressLong, y₁ = positionLong */

let sumSquareCoords = ((addressLat - positionLat) ** 2) + ((addressLong - positionLong) ** 2); // Возведение в степень суммы разниц координат х и y
let d = Math.sqrt(sumSquareCoords); // Квадратный корень из sumSquareCoords - расстояние между двумя точками. 
console.log(sumSquareCoords); 
console.log(d);





