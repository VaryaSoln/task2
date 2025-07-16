/* Кейс-задача № 2
Стилистическое преобразование чисел:
➔	Напишите программу, которая запрашивает у пользователя последовательно день его рождения, месяц и год;
➔	Напишите функцию, которая определяет какому дню недели соответствует эта дата?
➔	Напишите функцию, которая определяет - високосный это был год, или нет?
➔	Напишите функцию, которая определяет сколько сейчас лет пользователю;
➔	Реализуйте вывод в консоль даты рождения пользователя в формате дд мм гггг, где цифры прорисованы звёздочками (*), как на электронном табло.
Ответом на задание будет ссылка на репозиторий GitHub, где хранится Ваша программа.
 */


//Напишите программу, которая запрашивает у пользователя последовательно день его рождения, месяц и год;

// Запрашиваем день рождения
let day = prompt("Введите день вашего рождения (1-31):");
if (!isValidDay(day)) {
    alert('Некорректный ввод дня!');
    day = prompt("Введите день вашего рождения:");
}

// Запрашиваем месяц рождения
let month = prompt("Введите месяц вашего рождения (1-12):");
if (month.length <= 1) {
    month = "0" + month;
} 
if (!isValidMonth(month)) {
    alert('Некорректный ввод месяца!');
    month = prompt("Введите месяц вашего рождения (1-12):");
}

// Запрашиваем год рождения
let year = prompt("Введите год вашего рождения (например, 1990):");
if (!isValidYear(year)) {
    alert('Некорректный ввод года!');
    year = prompt("Введите год вашего рождения (например, 1990):");
}

//console.log(`Вы родились ${day}.${month}.${year}`);


// Проверка корректности введенных значений
function isValidDay(day) {
    return !isNaN(day) && parseInt(day) >= 1 && parseInt(day) <= 31;
}

function isValidMonth(month) {
    return !isNaN(month) && parseInt(month) >= 1 && parseInt(month) <= 12;
}

function isValidYear(year) {
    const currentYear = new Date().getFullYear();
    return !isNaN(year) && parseInt(year) > 1900 && parseInt(year) <= currentYear;
}

//мысли: надо преобразовать полученные день, месяц и год в дату

let date = new Date(year, month, day); // преобразовываем данные в объект Date
let validMonth = date.getMonth() - 1; // теперь месяц считается правильно
let date2 = new Date(year, validMonth, day)

//console.log(`новая дата с использованием значений = ${date2}`); //проверка


//Напишите функцию, которая определяет какому дню недели соответствует эта дата?

function getWeekDay(date2) {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    return days[date2.getDay()];
}

let dayName = getWeekDay(date2);
console.log(`День недели для ${date2}: ${dayName}`);



//Напишите функцию, которая определяет - високосный это был год, или нет?
let yearСheck = date2.getFullYear();

function isLeapYear(yearСheck) {
    if ((yearСheck % 4 === 0 && yearСheck % 100 !== 0) || (yearСheck % 100 === 0 && yearСheck % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

if (isLeapYear(yearСheck)) {
    console.log(`${yearСheck} год - високосный`)
} else {
    console.log(`${yearСheck} год - не високосный`)
}

//Напишите функцию, которая определяет сколько сейчас лет пользователю;

function isUserAge(date2) {
    const day = new Date();
    const birthDay = date2;
    let userAge = day.getFullYear() - birthDay.getFullYear();
    return userAge;
}

const age = isUserAge(date2);
console.log(`Возраст пользователя: ${age}`);


//Реализуйте вывод в консоль даты рождения пользователя в формате дд мм гггг, где цифры прорисованы звёздочками (*), как на электронном табло.

const numb = [

    ["*****", "*   *", "*   *", "*   *", "*****"],

    ["  *  ", " **  ", "* *  ", "  *  ", "*****"],

    [" *** ", "*   *", "   * ", "  *  ", "*****"],

    ["*****", "    *", "  ** ", "    *", "*****"],

    ["    *", "   **", "  * *", "*****", "    *"],

    ["*****", "*    ", "*****", "    *", "*****"],

    ["*****", "*    ", "*****", "*   *", "*****"],

    ["*****", "   * ", "  *  ", "*    ", "*    "],

    ["*****", "*   *", "  *  ", "*   *", "*****"],

    ["*****", "*   *", "*****", "    *", "*****"]
];

const dateArr = [];
let dateOfBirth = day + month + year;
console.log(`это дата ${dateOfBirth}`)

const transformArr = dateOfBirth.split("");
transformArr.forEach(number => dateArr.push(numb[number]));



console.log(dateArr);

for (i = 0; i < dateArr[0].length; i++) {
    const values = dateArr.map(innerArray => innerArray[i]).join("  ");
    console.log(values);
}
