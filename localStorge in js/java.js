//localStorage.setItem('name','omda');


//localStorage.setItem('age', JSON.stringify(25))
//localStorage.setItem('skills',JSON.stringify([1,2,3]))
//localStorage.name =JSON.stringify({
  //  name:'emad',
   // age:22,
//})


//console.log(JSON.parse(localStorage.getItem('name')))

// if you want clear localstorage used "localstorage clear in consloe.log"

//let text = document.getElementById("text");

//if(localStorage.length> 0){
  //  text.value = localStorage.getItem('text')

    //}

    //text.onkeyup = function(){
      //  localStorage.setItem('text',text.value)
    ///}


    if (localStorage.length >0){
        document.body.style.background = localStorage.color;
    }


    function setcolor(color)
    {
         localStorage.setItem('color',color)
        document.body.style.background= color;
    }