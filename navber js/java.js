let btnopen =document.getElementById("open");
let btnoclose =document.getElementById("close");
let navber = document.querySelector(".navber");


btnoclose.onclick= function(){
    navber.classList.add("hide");
    btnoclose.classList.add("hide");
    btnopen.classList.remove("hide");
}
btnopen.onclick = function(){
    this.classList.add("hide");
    btnoclose.classList.remove("hide");
    navber.classList.remove("hide");
}