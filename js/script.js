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
// // // hello
// // // 10 

// //свойства страки
// const str = 'test';
// const arr = [1, 2, 5, 6,7];

// console.log(str.length);     //длинна строки
// console.log(arr.length);      //кол-во элементов в массиве
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // 4
// // 5
// //методы строки
// console.log(str.toUpperCase());   // TEST, но переменную не меняет
// console.log(str.toLowerCase());   // в нижний регистр
// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));   //возвращает индекс первого символа искомого текста
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // 5
// const logg = 'Hello World!';
// console.log(logg.slice(6, 11));    // получить часть строки (индекс начала, индекс сл полсе последнего )
// console.log(logg.substring(6, 11));  // тоже
// console.log(logg.substr(6, 5));      // получить часть строки (индекс начала, количество символов )
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // World
// // World
// // World

// //цифры
// const num = 12.2;
// console.log(Math.round(num));   //Math -- библиотека свойств, округление до целого
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // 12
// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // 12        обе возвращают числовой тип данных, до целого
// // 12.2        дробное


// // Callback- функции /должна быть выполнена после выполнения другой функции

// function first() {
//     //Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }
// function second() {
//     console.log(2);
// }
// first();
// second();
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // 2
// // 1

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang} `);
//     callback();
// }
// learnJS('JS', function() {
//     console.log(`Я прошел это  урок `);
// });
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // Я учу: JS 
// // Я прошел это  урок 

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang} `);
//     callback();
// }
// function done() {
//     console.log(`Я прошел это  урок `);
// }

// learnJS('JS', done);  //Callback- функции передаются без ( )
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // Я учу: JS 
// // Я прошел это  урок 


// //Объекты, деструктуризация объектов (ES6)

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {       //создание собственного метода для объекта
//         console.log("Test");
//     }
// };
// options.makeTest();        // использование собственного метода
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // Test

// console.log(options);
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // {
// //   name: 'test',
// //   width: 1024,
// //   height: 1024,
// //   colors: { border: 'black', bg: 'red' }
// // }
// console.log(options.name);
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // test
// delete options.name;
// console.log(options);
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // { width: 1024, height: 1024, colors: { border: 'black', bg: 'red' } }

// // for in  -- перебор объекта
// for (let key in options) {
//     console.log(`свойство ${key} имеет значение ${options[key]} `);
// }
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // свойство width имеет значение 1024 
// // свойство height имеет значение 1024 
// // свойство colors имеет значение [object Object] 

// //объект в объекте
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`свойство ${i} имеет значение ${options[key][i]} `);
//         }
//     }else{
//         console.log(`свойство ${key} имеет значение ${options[key]} `);
//     }   
// }
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // свойство name имеет значение test 
// // свойство width имеет значение 1024 
// // свойство height имеет значение 1024 
// // свойство border имеет значение black 
// // свойство bg имеет значение red 

// console.log(Object.keys(options)); //получаем массив из ключей
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // [ 'name', 'width', 'height', 'colors' ]

// console.log(Object.keys(options).length);  //хитрый способ получить количество свойств объекта
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // 4  //количество свойст объекта options

// // деструктуризация
// const {border, bg} = options.colors;
// console.log(border);
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // black


// Массивы и псевдомассивы
// const arr = [1, 2, 3, 4, 5];
// arr[99] = 1;                    //добавляем 99 элемент массива
// console.log(arr.length);        // length -- это номер последнего элемента +1
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // 100


// arr.pop(arr);  // удаляет последний эл-т
// arr.push(10);  // добавление в конец

// //перебор
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // 1
// // 2
// // 3
// // 4
// // 10
// for (let value of arr) {  // value каждый отделый элемент
//     console.log(value);
// } // можно использовать brack; continue;
// arr.forEach(function(item, i, arr) {   // функция для каждого элемента массива
// // принимает 3 аргумента: элемент, номер по порядку, ссылка на массив
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // 0: 1 внутри массива 1,2,3,4,10
// // 1: 2 внутри массива 1,2,3,4,10
// // 2: 3 внутри массива 1,2,3,4,10
// // 3: 4 внутри массива 1,2,3,4,10
// // 4: 10 внутри массива 1,2,3,4,10

// const str = prompt("", "");
// const products = str.split(", "); // предбразует строку в массив. нужно точно знать разделитель
// console.log(products); 
// console.log(products.sort());     // сортировка в алфавитном порядке, работает со стороками
// console.log(products.join('; '));      // из массива в строку / обязательно ''
// //колбэк функция для сортировки массива с цифрами
// const nums = [12, 1, 5, 9];
// nums.sort(compareNum);
// console.log(nums);
// function compareNum(a, b) {
//     return a - b;
// }
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // [ 1, 5, 9, 12 ]

// //псевдомассивы -- объект походий на массив, который не имеет методов массива 
//Передача по ссылке или по значению, Spread оператор (ES6-ES9)
//в примитивных типах данных при клонировании передается значение
// let a = 5,
//     b = 5;

// b = b + 5;
// console.log(b);
// console.log(a);
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // 10
// // 5
// // в сложных типах данных при клонировании передается ссылка на объет
// // при изменении клона изменяется основной объект
// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj;  // передается ссылка
// copy.a = 10;       // изменяем как бы obj
// console.log(copy);
// console.log(obj);
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // { a: 10, b: 1 }
// // { a: 10, b: 1 }

// //копирование объектов
// //поверхностная копия, вложенные объкты копируются как ссылки
// function cop(mainObj) { 
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
// const numbers = {
//     a: 5,
//     b: 7,
//     c: {
//         d: 4,
//         e: 9
//     }
// };
// const newNumbers = cop(numbers);
// newNumbers.a = 10;
// newNumbers.c.d = 10;
// console.log(numbers);
// console.log(newNumbers);
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // { a: 5, b: 7, c: { d: 10, e: 9 } }
// // { a: 10, b: 7, c: { d: 10, e: 9 } }
// //первый уровень скопировался, а втрой и последующие -- ссылка

// //соединение объектов
// const add = {
//     k: 12,
//     l: 15
// };
// console.log(Object.assign(numbers, add)); // (к кому присоединяем, что присоединяем)
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // { a: 5, b: 7, c: { d: 10, e: 9 }, k: 12, l: 15 } /создан независимф объект
// // так можно клонировать объект 
// const clone = Object.assign({}, add);
// clone.k = 20;
// console.log(add);
// console.log(clone);
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // { k: 12, l: 15 }
// // { k: 20, l: 15 }

// //копия массива
// const oldArr = ['a', 'b', 'c'];
// // const newArr = oldArr; // ссылка
// const newArr = oldArr.slice(); // копия
// newArr[1] = 'abc';
// console.log(oldArr);
// console.log(newArr);
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // [ 'a', 'b', 'c' ]
// // [ 'a', 'abc', 'c' ]

// //оператор разварота, разворачивает объект внутри объекта 
// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'telegram'];

// console.log(internet);
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // [
// //   'youtube',
// //   'vimeo',
// //   'rutube',
// //   'wordpress',
// //   'livejournal',
// //   'blogger',
// //   'vk',
// //   'telegram'
// // ]
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // 2
// // 5
// // 7

// const array = ['a', 'c', 'b'];
// const newwArray = [...array];
// const q = {
//     one: 1,
//     two: 2
// };
// const newQ = {...q};
// console.log(newQ);
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // { one: 1, two: 2 }


// //ООП
// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // string
// // object
// console.dir([1, 2, 3]);

// const solider = {
//     healt: 400,
//     armor: 100,
//     setHello: function() {
//         console.log("Hello!!!");
//     }
// };
// const jonh = {
//     healt: 100
// };
// //устаревший
// jonh.__proto__ = solider;
// console.log(jonh.armor);
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // 100
// //сейчас
// Object.setPrototypeOf(jonh, solider);   //кому, от кого
// jonh.setHello();
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // Hello!!!
// //установка прототипа при создании объекта
// //правильный подход
// const tom = Object.create(solider);
// tom.setHello(); 
// // [Running] node "d:\2020\udemy\js\js-2020\js\tempCodeRunnerFile.js"
// // Hello!!!
