/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {   //все начнет выполнятся после полной загрузки DOM дерева
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Скотт Пилигрим ...",
            "абв"
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img');
    const gerne = document.querySelector('.promo__genre');
    const bg = document.querySelector('.promo__bg');
    const list = document.querySelector('.promo__interactive-list');
    const items = document.querySelectorAll('.promo__interactive-item');

    const addForm = document.querySelector('form.add');
    const input = document.querySelector('.adding__input');   
    const checkbox = document.querySelector('input[type="checkbox"]');


    //правильная структура функций
    const deleteAdv = (arr) => {
        adv.forEach(item => {
            item.remove();
        });
    };    

    const makeChanges = () => {
        gerne.textContent= 'драма';
        bg.style.cssText = 'background: url(img/bg.jpg) top center/cover no-repeat;';
    };    

    const sortArr = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].toUpperCase();
        }
        arr.sort();
    };       

    function createMovieList(films, parent) {
            parent.innerHTML = "";
            sortArr(films);
            films.forEach((film, i) => {
                parent.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${movieDB.movies[i]}
                <div class="delete"></div></li>`;
        });
        
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }    

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = input.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies); 
    
            createMovieList(movieDB.movies, list);
    
            event.target.reset(); //текущий
        } 
        if (favorite) {
            console.log("Добавляем любимый фильм");
        }     
        
    });

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, list);

});
    // const btn = document.querySelector('button');

    // for (let i = 0; i < movieDB.movies.length; i++) {
    //     list.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${movieDB.movies[i]}
    //     <div class="delete"></div></li>`);
    // }


    // btn.addEventListener('click', (e) => {   //работает
    //     e.preventDefault();
    //     console.log(input.value);
    //     movieDB.movies.unshift(input.value);
    //     movieDB.movies[0] = movieDB.movies[0].toUpperCase();
    //     movieDB.movies.sort();
    //     list.innerHTML = "";
    //     movieDB.movies.forEach((film, i) => {
    //         list.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${movieDB.movies[i]}
    //         <div class="delete"></div></li>`;
    //     });
    // });   
    
    // btn.addEventListener('click', (e) => {    //работает мой
    //     e.preventDefault();
    //     if (input.value.length > 21) {        
    //         input.value = input.value.substr(0 , 22);
    //         input.value += "...";
    //         console.log(input.value);
    //     } else {
    //         console.log(input.value);
    //     }
    //     movieDB.movies.unshift(input.value);
    //     movieDB.movies[0] = movieDB.movies[0].toUpperCase();
    //     movieDB.movies.sort();
    //     list.innerHTML = "";
    //     movieDB.movies.forEach((film, i) => {
    //         list.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${movieDB.movies[i]}
    //         <div class="delete"></div></li>`;
    //     });        
    // }); 
