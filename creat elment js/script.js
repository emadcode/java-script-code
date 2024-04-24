
let containar = document.createElement('div');
let head =document.createElement('h1');
let img =document.createElement('img');

let contant=document.createTextNode('hello omda');
head.appendChild(contant);
img.src='';
containar.appendChild(head);
containar.appendChild(img);

    document.body.appendChild(containar)
    console.log(containar)
