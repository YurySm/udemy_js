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

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num <= 55);

for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
} 

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;                  // остановить цикл в нужном месте
        continue;               // пропускает это место
    }
    console.log(i);
} 
