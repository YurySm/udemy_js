const btn = document.querySelector('button');

btn.onclick = function () {  // так лучше не делать
    alert('click');
};

btn.addEventListener('click', function() {    //добавляем обработчик события
    alert('click');
});  
btn.addEventListener('click', function() {    // срабатывают все обработчики событий
    alert('second click');
});  
btn.addEventListener('mouseenter', function(e) {    //добавляем обработчик события
    console.log(e.target);                                 // объект события Event
    console.log('hover');
});
// MouseEvent {isTrusted: true, screenX: 1466, screenY: 160, clientX: 100, clientY: 57, …}
const deleteElement = (e) => {
    e.target.remove();
};
let i = 0;
const delElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', delElement);  //удаляем обработчиk
    }
};
btn.addEventListener('click', delElement);     //назначаем обработчик
//ВСПЛЫТИЕ СОБЫТИЙ это когда действие сробатывает сразу на вложенном объекте а потом на родтителе
const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', delElement);     
// одно и тоже событие сработает сразу на btn а после на overlay

// отмена стандартного поведения браузера
const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault();                 //отменяем станд поведение браузера
    console.log(e.target);
});
btn.addEventListener('click', delElement, {once: true}); // событие, обработчик, опции
//once -- не боелле одного раза