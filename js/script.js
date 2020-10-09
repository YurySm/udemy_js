'use strict';

// if(4 == 9){                  //если
//     console.log('Ok!');
// }else{                      // ИНАЧЕ
//     console.log('ERR');
// }
// const number = 1;
// //если переменная имеет значение условие выполнится
// if (number) {
//     console.log('Ok!');
// }else{                     
//     console.log('ERR');
// }

// const num = 50;

// if (num < 49) {
//     console.log('мало');
// }else if (num > 100) {
//     console.log('много');
// }else{
//     console.log('ok');
// }
// //терназный оператор
// //  условие  ?     если да       : если нет
// (num === 50) ? console.log('ok') : console.log('err');

// //проверяет только на точное соответсятвие
// switch (num) {
//     case 49: 
//         console.log('not 50');
//         break;
//     case 100: 
//         console.log('not 50 ot 50');
//         break;
//     case 50:
//         console.log('50');
//         break; 
//     default: 
//         console.log('в сл раз!');
//         break;       
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// } 

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         //break;                  // остановить цикл в нужном месте
//         continue;               // пропускает это место
//     }
//     console.log(i);
// } 

// function showFirstMassage() {
//     console.log('hello');
// }
// showFirstMassage();  //обязательно вызвать
//                     //аргументы в ковычках
// // [Running] node "d:\2020\udemy\js\js -2020\js\tempCodeRunnerFile.js"
// // hello

// function showFirstMassage(text) {
//     console.log(text);
//     let a = 20;               // переменная остается только внутри функции
// }
// showFirstMassage('hello world!');  
// // [Running] node "d:\2020\udemy\js\js -2020\js\tempCodeRunnerFile.js"
// // hello world!

// let a = 20;               //глобальная переменная
// function showFirstMassage(text) {
//     console.log(text);
//     a = 10;               // глобальную может изменять
// }
// showFirstMassage('hello world!'); 
// console.log(a);
// // [Running] node "d:\2020\udemy\js\js -2020\js\tempCodeRunnerFile.js"
// // hello world!
// // 10

// //внутри ф-ции можно создать переменную с именем глобальной, 
// // она останется в функции и не будет влиять на глобальную
// let an = 20;               
// function showFirstMassage(text) {
//     console.log(text);
//     let an = 10;               
// }
// showFirstMassage('hello world!'); 
// console.log(an);
// // [Running] node "d:\2020\udemy\js\js -2020\js\tempCodeRunnerFile.js"
// // hello world!
// // 20

// //замыкание функции
// // функция ищет пременную сразу внутри себя, если не находт ищет выше от начала документа

// function calc(a, b) {
//     return (a + b);     // возвращает рузультат функции и останавливает функцию
// }
// console.log(calc(2, 5));
// // [Running] node "d:\2020\udemy\js\js -2020\js\tempCodeRunnerFile.js"
// // 7 

// // return может вернуть локальную переменную
// function ret () {
//     let num = 50;

//     //код какой нить

//     return num;
// }
// const anotherNum = ret(); //результат функции в переменную
// console.log(anotherNum);
// // [Running] node "d:\2020\udemy\js\js -2020\js\tempCodeRunnerFile.js"
// // 50

// const logger = function() {
//     console.log('hello');
// };

// logger();
// // [Running] node "d:\2020\udemy\js\js -2020\js\tempCodeRunnerFile.js"
// // hello

// //стрелочные функции
// const calcul = (a, b) =>  a + b ; //если в одну строку
// const calculate = (a, b) => {     // {} если не одна строка
//     console.log('hello');
//     return a + b;
// };
// console.log(calcul(2, 5));
// console.log(calculate(3, 7)); 
// // [Running] node "d:\2020\udemy\js\js -2020\js\tempCodeRunnerFile.js"
// // 7
// // hello
// // 10 

//свойства страки
const str = 'test';
const arr = [1, 2, 5, 6,7];

console.log(str.length);     //длинна строки
console.log(arr.length);      //кол-во элементов в массиве
// [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// 4
// 5
//методы строки
console.log(str.toUpperCase());   // TEST, но переменную не меняет
console.log(str.toLowerCase());   // в нижний регистр
const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));   //возвращает индекс первого символа искомого текста
// [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// 5
const logg = 'Hello World!';
console.log(logg.slice(6, 11));    // получить часть строки (индекс начала, индекс сл полсе последнего )
console.log(logg.substring(6, 11));  // тоже
console.log(logg.substr(6, 5));      // получить часть строки (индекс начала, количество символов )
// [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// World
// World
// World

//цифры
const num = 12.2;
console.log(Math.round(num));   //Math -- библиотека свойств, округление до целого
// [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// 12
const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));
// [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// 12        обе возвращают числовой тип данных, до целого
// 12.2        дробное


