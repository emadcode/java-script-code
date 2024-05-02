let request = new XMLHttpRequest()


request.open("Get","https://jsonplaceholder.typicode.com/posts")
request.responseType ="json"
request.send()
request.onload = function(){

  let posts =  request.response

  for (post of posts){
    document.getElementById("content").innerHTML +=`<h1>${post.title}</h1>`
  }
}
