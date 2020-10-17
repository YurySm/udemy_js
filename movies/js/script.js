/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Скотт Пилигрим ..."
    ]
};
const adv = document.querySelectorAll('.promo__adv img');
const gerne = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');
const list = document.querySelector('.promo__interactive-list');
const items = document.querySelectorAll('.promo__interactive-item');


// adv.remove();
adv.forEach(item => {
    item.remove();
});
// items.forEach(item => {
//     item.remove();
// });
list.innerHTML = "";


// let userGanre = 'драма';
// gerne.textContent = userGanre.toUpperCase();
gerne.textContent= 'драма';
// bg.style.background = 'url("img/bg.jpg")';
bg.style.cssText = 'background: url(img/bg.jpg) center center/cover no-repeat;';

for (let i = 0; i < movieDB.movies.length; i++) {
    movieDB.movies[i] = movieDB.movies[i].toUpperCase();
}

movieDB.movies.sort();

// for (let i = 0; i < movieDB.movies.length; i++) {
//     list.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${movieDB.movies[i]}
//     <div class="delete"></div></li>`);
// }
movieDB.movies.forEach((film, i) => {
    list.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${movieDB.movies[i]}
    <div class="delete"></div></li>`;
});
