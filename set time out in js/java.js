//setTimeout( function(){
  //  console.log ("hello omda")
///}),1000;


// if you want stoped used set timout used 
//let hello =( function(){
  //  console.log ("hello omda");
//},1000)
  
//clearTimeout(hello )

//let i =0 
//let hello =setInterval(function(){
  //  console,log(i++)
//},1000);

let i =0;
let emad= setInterval(function(){
    console.log(i++);
    if(i == 5)
    clearInterval(emad)
},1000);