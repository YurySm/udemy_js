'use strict';
const box = document.getElementById('box');  // получение по ID
const btns = document.getElementsByTagName('button');  //псевдомассив со всеми тегами со страницы
const circles = document.getElementsByClassName('circle');  // псевдомассив с элементами с определенным классом
const hearts = document.querySelectorAll('.heart');   //любой CSS селектор, псевдомассив имеет метод forEch
const oneHeart = document.querySelector('.heart'); // получает первый элемент
const wrapper = document.querySelector('.wrapper');
//список всего что можно сделать в consle.dir();
//работа с инлайн стилями
box.style.cssText = 'background-color: blue; width: 500px;';
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
/* <div class="box" id="box" style="background-color: blue; width: 500px;"></div> */

btns[1].style.borderRadius = '100%';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});
// сщздание html елемента
const div = document.createElement('div'); //внутри js
const text = document.createTextNode('текст');
div.classList.add('black');  // добавление классов из style.css
document.body.append(div); //элемент в конец документа
//для получения переменной на один раз
wrapper.append(div);
wrapper.prepend(div);  // в начало
hearts[0].before(div);   // перед определенным элементом на страницее
hearts[0].after(div);     // после определенного элемента на страницее
circles[0].remove();     // удаление определенного элемента на страницее
hearts[1].replaceWith(circles[1]); //замена элемента другим, который заменяет перемещается

// устаревшая
wrapper.appendChild(div);   // в конец
wrapper.insertBefore(div, hearts[0]); // (что вставить, перед чем свтавить)
wrapper.removeChild(hearts[1]);     // удаление
wrapper.replaceChild(circles[0], hearts[0]); // (на который меняется, который меняется)
div.textContent = "HEllo"; // вставить текст
div.innerHTML = '<H1>Hello World!</H1>';  // вставить HTML код
div.insertAdjacentHTML('afterend', '<H2>Hello</H2>'); // вставить HTML код
// beforebegin -- вставить перед элементом
// afterbegin -- вставить в начале элемента
// beforeend -- в конец элемента
// afterend -- после элемента