class AlarmClock {
	// constructor — выделяет память для объекта.
	constructor() {
		//Создайте свойство для хранения коллекции звонков alarmCollection
		//с начальным значением пустого массива.
		this.alarmCollection = [];
		//Создайте свойство intervalId для хранения id таймера без начального значения.
		this.intervalId = null;
	}
	//addClock — добавляет новый звонок в коллекцию существующих.
	addClock(time, callback) {
		//Принимает параметр времени в формате HH:MM — время,
		//когда действие должно запуститься.
		//Принимает параметр функции-коллбека — действие, которое должно запуститься.
		//Проверьте, переданы ли параметры времени и коллбека.
		//Если параметр не передан, выполните выброс ошибки с помощью throw new Error('Отсутствуют обязательные аргументы').
		if (!time || !callback) { // если к-то аргумент отсутвует
			throw new Error('Отсутствуют обязательные аргументы');
		}

		//Проверьте, есть ли звонок с таким же временем.
		//Если есть, выведите предупреждение в консоль с помощью console.warn('Уже присутствует звонок на это же время').
		//Перед завершением метода добавьте в массив звонков объект со свойствами
		//callback, time, canCall. В свойстве canCall должно быть значение
		//запуска функции коллбека. Изначально значением должно быть true.
		if (this.alarmCollection.some(alarm => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}

		const newAlarm = {
			time,
			callback,
			canCall: true
		};
		this.alarmCollection.push(newAlarm);
	}
	//removeClock — удаляет звонки по определённому времени.
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
	}
	//start — запускает будильник.
	start() {
		// останавливается, если будильник уже запущен
		if (this.intervalId) {
			return; //уже есть запущенный таймер
		}
		// запускает новый интервал
		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();
			this.alarmCollection.forEach(alarm => { //перебираем коллекцию будильников
				if (alarm.time === currentTime && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback();
				}
			});
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId); // остановить интервал
		this.intervalId = null; // сбросить значение свойства
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true;
		});
	}

	clearAlarms() {
		this.stop(); // останавливаем интервал
		this.alarmCollection = []; // удаляем все звонки
	}
}




