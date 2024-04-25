let names =['ahmed','ali','emad','kareem'];
let ages =['19 years old','29 years old', '16 years old','20 years old'];
let container =document.createElement('div');
document.body.appendChild(container);
container.style.textAlign='center';

function element(names,ages)

{
    // elements
    let card = document.createElement('div');
    let title =document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');


    //contant
    let head =document.createTextNode(names);
    let agecontent=document.createTextNode(ages);

    img.src='omda.jpg';
    title.appendChild(head);
    age.appendChild(agecontent);
//style
card.style.width='300px'
img.style.width='200px'
card.style.background='#444'
card.style.padding='10px';
card.style.textAlign='center'
card.style.color='#fff'
card.style.margin='2px';
card.style.display ='inline-block';



      card.appendChild(title);
   card.appendChild(age);
  card.appendChild(img);

    container.appendChild(card);
    
}
 for( let i =0; i < 4; i++)
 {
    element(names[i], ages[i]);
 } 
