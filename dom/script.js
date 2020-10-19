console.log(document.head);             // <head></head>
console.log(document.documentElement);  //<html></html>


console.log(document.body.firstChild);     // получить первый дочерний узел
console.log(document.body.firstElementChild);     // получить первый дочерний ЭЛ-Т
console.log(document.body.lastChild);      // получить последний дочерний узел
console.log(document.body.lastElementChild);      // получить последний дочерний ЭЛ-Т

console.log(document.querySelector('#current').parentNode);   // получить родителя 
console.log(document.querySelector('#current').parentElement); // получить родителя ЭЛ-Т
console.log(document.querySelector('[data-current="3"]').nextSibling);   // получить след узел
console.log(document.querySelector('[data-current="3"]').previousSibling);  // получить предыдущий узел
console.log(document.querySelector('[data-current="3"]').nextElementSibling);   // получить след эл-т
console.log(document.querySelector('[data-current="3"]').previousElementSibling);   // получить предыдущий эл-т
console.log(document.body.childNodes);     // получить детей <body></body> с узлами
for (let node of document.body.childNodes) {  // откидываем текстовые ноды
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}
