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

// // Запрашиваем день рождения
// let day = prompt("Введите день вашего рождения (1-31):");
// if (!isValidDay(day)) {
//     alert('Некорректный ввод дня!');
//     day = prompt("Введите день вашего рождения:");
// }

// // Запрашиваем месяц рождения
// let month = prompt("Введите месяц вашего рождения (1-12):");
// if (!isValidMonth(month)) {
//     alert('Некорректный ввод месяца!');
//     month = prompt("Введите месяц вашего рождения (1-12):");
// }

// // Запрашиваем год рождения
// let year = prompt("Введите год вашего рождения (например, 1990):");
// if (!isValidYear(year)) {
//     alert('Некорректный ввод года!');
//     year = prompt("Введите год вашего рождения (например, 1990):");
// }

// //console.log(`Вы родились ${day}.${month}.${year}`);

// // Проверка корректности введенных значений
// function isValidDay(day) {
//     return !isNaN(day) && parseInt(day) >= 1 && parseInt(day) <= 31;
// }

// function isValidMonth(month) {
//     return !isNaN(month) && parseInt(month) >= 1 && parseInt(month) <= 12;
// }

// function isValidYear(year) {
//     const currentYear = new Date().getFullYear();
//     return !isNaN(year) && parseInt(year) > 1900 && parseInt(year) <= currentYear;
// }


// //мысли: надо преобразовать полученные день, месяц и год в дату

// let date = new Date(year, month, day);// преобразовываем данные в объект Date
// let validMonth = date.getMonth() - 1; // теперь месяц считается правильно
// let date2 = new Date(year, validMonth, day)
// console.log(`новая дата с использованием значений = ${date2}`); //проверка


// //Напишите функцию, которая определяет какому дню недели соответствует эта дата?

// function getWeekDay(date2) {
//     const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
//     return days[date2.getDay()];
// }

// let dayName = getWeekDay(date2);
// console.log(`День недели для ${date2}: ${dayName}`);



// //Напишите функцию, которая определяет - високосный это был год, или нет?
// let yearСheck = date2.getFullYear();

// function isLeapYear(yearСheck) {
//     if ((yearСheck % 4 === 0 && yearСheck % 100 !== 0) || (yearСheck % 100 === 0 && yearСheck % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// if (isLeapYear(yearСheck)) {
//     console.log(`${yearСheck} год - високосный`)
// } else {
//     console.log(`${yearСheck} год - не високосный`)
// }

// //Напишите функцию, которая определяет сколько сейчас лет пользователю;

// function isUserAge(date2) {
//     const day = new Date();
//     const birthDay = date2;
//     let userAge = day.getFullYear() - birthDay.getFullYear();
//     return userAge;
// }

// const age = isUserAge(date2);
// console.log(`Возраст пользователя: ${age}`);

//Реализуйте вывод в консоль даты рождения пользователя в формате дд мм гггг, где цифры прорисованы звёздочками (*), как на электронном табло.

const numb = [

    ["***", "* *", "* *", "* *", "***"],

    [" * ", "** ", " * ", " * ", "***"],

    ["***", "* *", " * ", "* ", "***"],

    ["***", "* *", " ** ", "* *", "***"],

    ["  *", " **", "* *", "***", "  *"],

    ["***", "*  ", "*** ", "  *", "***"],

    ["***", "*  ", "***", "* *", "***"],

    ["***", "  *", " * ", "*  ", "*  "],

    ["***", "* *", " * ", "* *", "***"],

    ["***", "* *", "***", "  *", "***"]
]



//выводит все числа 
numb.forEach((arr) => {
    arr.forEach((number) => {
       // console.log(number);
    });
    //console.log();
});

//создает новый массив. из старого берет первое значение из каждого вложенного массива

const oneValues = numb.map(innerArray => innerArray[0]).join("  ");
const twoValues = numb.map(innerArray => innerArray[1]).join("  ");
const threeValues = numb.map(innerArray => innerArray[2]).join("  ");
const fourValues = numb.map(innerArray => innerArray[3]).join("  ");
const fiveValues = numb.map(innerArray => innerArray[4]).join("  ");

console.log(oneValues)
console.log(twoValues)
console.log(threeValues)
console.log(fourValues)
console.log(fiveValues)


//
for (i = 0; i <= numb[0].length; i++) {
    const values = numb.map(innerArray => innerArray[i]);
    //console.log(values)
}







function getNum(число){

if (nomer === number) {
    console.log(number[i])
}
return "число нарисованное звездочками"
} 



/*


for (i = 0; i < numb.length; i++) {
   console.log(numb[i]);
}



/*
//0
console.log(numb[0][0]);
console.log(numb[0][1]);
console.log(numb[0][2]);
console.log(numb[0][3]);
console.log(numb[0][4]);

console.log("")

//1
console.log(numb[1][0]);
console.log(numb[1][1]);
console.log(numb[1][2]);
console.log(numb[1][3]);
console.log(numb[1][4]);

console.log("")

//2
console.log(numb[2][0]);
console.log(numb[2][1]);
console.log(numb[2][2]);
console.log(numb[2][3]);
console.log(numb[2][4]);

console.log("")

//3
console.log(numb[3][0]);
console.log(numb[3][1]);
console.log(numb[3][2]);
console.log(numb[3][3]);
console.log(numb[3][4]);

console.log("")

//4
console.log(numb[4][0]);
console.log(numb[4][1]);
console.log(numb[4][2]);
console.log(numb[4][3]);
console.log(numb[4][4]);

console.log("")

//5
console.log(numb[5][0]);
console.log(numb[5][1]);
console.log(numb[5][2]);
console.log(numb[5][3]);
console.log(numb[5][4]);

console.log("")

//6
console.log(numb[6][0]);
console.log(numb[6][1]);
console.log(numb[6][2]);
console.log(numb[6][3]);
console.log(numb[6][4]);

console.log("")

//7
console.log(numb[7][0]);
console.log(numb[7][1]);
console.log(numb[7][2]);
console.log(numb[7][3]);
console.log(numb[7][4]);

console.log("")

//8
console.log(numb[8][0]);
console.log(numb[8][1]);
console.log(numb[8][2]);
console.log(numb[8][3]);
console.log(numb[8][4]);

console.log("")


//9
console.log(numb[9][0]);
console.log(numb[9][1]);
console.log(numb[9][2]);
console.log(numb[9][3]);
console.log(numb[9][4]);

console.log("")



*/






// function getUserBirthday() {
//     // Запрашиваем день рождения
//     let day = prompt("Введите день своего рождения (1-31):");
//     //проверка


//     if (isNaN(day) && day <= 1 && day >= 31) {
//         day = prompt("Неверный ввод. Введите день своего рождения (1-31)")
//     } else{
//         return day;
//     }

//     // Запрашиваем месяц рождения
//     let month = prompt("Введите месяц своего рождения (1-12):", 1);
//     //проверка
//     if (!isNaN(day) || month < 1 || month > 12) {
//         month = prompt("Неверный ввод. Введите месяц своего рождения (1-12):")
//     }

//     // Запрашиваем год рождения
//     let year = prompt("Введите год своего рождения (например, 1990):");
//     //проверка
//     if (!isNaN(day) || year < 1900 /* || year > текущей даты */) {
//         year = prompt("Неверный ввод. Введите год своего рождения (например, 1990):")
//     }

//     // Возвращаем введенные данные
//     //Функция parseInt() принимает строку в качестве аргумента и 
//     //возвращает целое число в соответствии с указанным основанием системы счисления.
//     return {
//         day: parseInt(day, 10),
//         month: parseInt(month, 10),
//         year: parseInt(year, 10)
//     };

// }
// console.log(getUserBirthday());



//Напишите функцию, которая определяет какому дню недели соответствует эта дата?
//мысли: надо преобразовать полученные день месяц и год в дату

/*
function getDayName(dateString) {
    const date = new Date(dateString);
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    return days[date.getDay()];
}
// Пример использования:
const dateString = "2025-06-17"; // Сегодняшняя дата
const dayName = getDayName(dateString);
console.log(`День недели для ${dateString}: ${dayName}`); // Вывод: День недели для 2024-06-17: понедельник

 */

//Напишите функцию, которая определяет - високосный это был год, или нет?

/*
Алгоритм решения задачи:

Проверяем делится ли год на 4. Если нет, то год уже невисокосный.
Если год делится на 4, то проверяем делится ли он на 100. Если нет, то год однозначно високосный.
Если год делится на 100, но при этом не делится на 400, то год невисокосный.
 */

/*
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
//let year = 2024;
if (isLeapYear(year)) {
    console.log(`${year} год - високосный`)
} else {
    console.log(`${year} год - не високосный`)
} */

//Напишите функцию, которая определяет сколько сейчас лет пользователю;
/*
function isUserAge(date) {
    const day = new Date();
    const birthDay = new Date(date);
    let userAge = day.getFullYear() - birthDay.getFullYear();
    return userAge;
}

const age = isUserAge("2004-11-10");
console.log(`Возраст пользователя: ${age}`); */


// //Реализуйте вывод в консоль даты рождения пользователя в формате дд мм гггг,
// // где цифры прорисованы звёздочками (*), как на электронном табло.

// const dateOfBurth = "2000-11-10";

// const date = new Date(dateOfBurth);
// const years = date.getFullYear();
// const month = date.getMonth() + 1; // в JavaScript месяцы считаются с нуля
// const day = date.getDate();

// console.log(years, month, day); // Выводит: ГГГГ, ММ, ДД

// function number(number) {
//     if (0) {
//         return " *** ", "* *", "* *", "* *", " *** ";
//     } else if (1) {
//         return " * ", " ** ", " * ", " * ", "*****";
//     } else if (2) {
//         return " *** ", "* *", " * ", " * ", "*****";
//     } else if (3) {
//         return " *** ", "* *", " ** ", "* *", " *** ";
//     } else if (4) {
//         return " * ", " ** ", " * * ", "*****", " * ";
//     } else if (5) {
//         return "*****", "* ", "**** ", " *", "**** ";
//     } else if (6) {
//         return " *** ", "* ", "**** ", "* *", " *** ";
//     } else if (7) {
//         return "*****", " *", " * ", " * ", " * ";
//     } else if (8) {
//         return " *** ", "* *", " *** ", "* *", " *** ";
//     } else if (9) {
//         return " *** ", "* *", " ****", " *", " *** ";
//     }
// }




// /* 
// const num = number(2);
// console.log(num);

// const a = {
//     0: " *** ", "* *", "* *", "* *", " *** ",
//     1: 

// }
//  */
