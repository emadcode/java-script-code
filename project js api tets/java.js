// 
function getpost(){
    let request = new XMLHttpRequest()
    request.open("GEt","https://jsonplaceholder.typicode.com/posts")
    request.send()
    request.onload =function(){
        if (request.status >=200&& request.status<300){
            console.log(request.response)

        }else{
            alert("error omda")
        }
    }
}
getpost()