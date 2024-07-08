function parseCount(value) {
	//парсинг
	const parsedValue = Number.parseFloat(value);
	if (Number.isNaN(parsedValue)) {
		throw new Error('Невалидное значение');
	}
	return parsedValue;
}

function validateCount(value) {
	//Аргументом функции является значение, которое необходимо распарсить.
	//Попробуйте распарсить значение с помощью функции parseCount.
	try {
		const parsedValue = parseCount(value);
		//Если распарсить удаётся успешно, то возвращайте результат.
		return parsedValue;
	} catch (error) {
		//Перехватывайте исключение, которое может выбрасывать функция parseCount.
		//Возвращайте ошибку из функции в случае перехвата исключения.
		return error;
	}
}

//Задача 2
class Triangle {
	//Конструктор класса должен принимать три стороны треугольника.
	constructor(a, b, c) {
		//В случае нарушения правила существования треугольника
		//(сумма двух сторон меньше третьей) выбрасывайте исключение
		//с ошибкой «Треугольник с такими сторонами не существует».
		if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}
	//Геттер perimeter должен возвращать периметр треугольника.
	get perimeter() {
		return this.a + this.b + this.c;
	}
	//Геттер area должен возвращать площадь треугольника.
	//Для подсчёта площади используйте формулу Герона.
	//Точность должна вычисляться с обозначением до трёх знаков после запятой.
	get area() {
		const p = this.perimeter / 2;
		const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return +area.toFixed(3);
	}
}

//Напишите функцию getTriangle.
//Аргументами функции являются три значения длин сторон.
function getTriangle(a, b, c) {
	try {
		//Попытайтесь вернуть новый объект треугольника.
		return new Triangle(a, b, c);
	} catch (e) {
		//В случае перехвата исключения возвращайте объект
		//с двумя геттерами area и perimeter, которые возвращают строку:
		//«Ошибка! Треугольник не существует».
		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		}
	}
}