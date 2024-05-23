function GETposts() {
    // Create a new XMLHttpRequest
    let request = new XMLHttpRequest();
    
    // Open a GET request to the API endpoint that retrieves posts
    request.open("GET", "https://jsonplaceholder.typicode.com/posts");
    
    // Set the response type to JSON
    request.responseType = "json";
    
    // Send the request
    request.send();
    
    // When the response is loaded
    request.onload = function() {
        // Check if the request was successful (status code between 200 and 299)
        if (request.status >= 200 && request.status < 300) {
            // Get the response data (posts)
            let posts = request.response;
            
            // Loop through each post and add it to the webpage
            for (let post of posts) {
                document.getElementById("content").innerHTML += `<h1>${post.title}</h1>`;
            }
        } else {
            // If there was an error, show an alert
            alert("error");
        }
    }
}



function creatNewpost() {
    // Create a new XMLHttpRequest
    let request = new XMLHttpRequest();
    
    // Open a POST request to the API endpoint that creates a new post
    request.open("POST", "https://jsonplaceholder.typicode.com/posts");
    
    // Set the response type to JSON
    request.responseType = "json";
    
    // Set the request headers
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("content-type", "application/json");
    
    // Prepare the body of the request
    let bodyParams = `{
        "title": "name",
        "body": "omda",
        "userId": 1
    }`;
    
    // Send the request with the body parameters
    request.send(bodyParams);
    
    // When the response is loaded
    request.onload = function() {
        // Check if the request was successful (status code between 200 and 299)
        if (request.status >= 200 && request.status < 300) {
            // Get the response data
            let response = request.response;
            console.log(response);
            console.log("the status code is " + request.status);
            
            // Show an alert indicating the new post was created
            alert("the new post");
        }
    }
}

// Call the function to create a new post
//creatNewpost();
// Optionally, you can call GETposts to fetch and display all posts
// GETposts();



function updateput() {
    // Create a new XMLHttpRequest
    let request = new XMLHttpRequest();
    
    // Open a POST request to the API endpoint that creates a new post
    request.open("PUT", "https://jsonplaceholder.typicode.com/posts/1");
    
    // Set the response type to JSON
    request.responseType = "json";
    
    // Set the request headers
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("content-type", "application/json");
    
    // Prepare the body of the request
    let bodyParams = `{
        "title": "hello omda",
        "body": "omda",
        "userId": 1
    }`;
    
    // Send the request with the body parameters
    request.send(bodyParams);
    
    // When the response is loaded
    request.onload = function() {
        // Check if the request was successful (status code between 200 and 299)
        if (request.status >= 200 && request.status < 300) {
            // Get the response data
            let response = request.response;
            console.log(response);
            console.log("the status code is " + request.status);
            
            // Show an alert indicating the new post was created
            alert("the post  has been updated");
        }
    }
}
//updateput();

function deleting() {
    // Create a new XMLHttpRequest
    let request = new XMLHttpRequest();
    
    // Open a POST request to the API endpoint that creates a new post
    request.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
    
    // Set the response type to JSON
    request.responseType = "json";
    
    // Set the request headers
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("content-type", "application/json");
    
    // Prepare the body of the request
    let bodyParams = `{
        "title": "hello omda",
        "body": "omda",
        "userId": 1
    }`;
    
    // Send the request with the body parameters
    request.send(bodyParams);
    
    // When the response is loaded
    request.onload = function() {
        // Check if the request was successful (status code between 200 and 299)
        if (request.status >= 200 && request.status < 300) {
            // Get the response data
            let response = request.response;
            console.log(response);
            console.log("the status code is " + request.status);
            
            // Show an alert indicating the new post was created
            alert("the post  has been updated Deleting ");
        }
    }
}
//deleting()


function getallpostwithuseridfilter() {
    // Create a new XMLHttpRequest
    let request = new XMLHttpRequest();
    
    // Open a GET request to the API endpoint that retrieves posts
    request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=3");
    
    // Set the response type to JSON
    request.responseType = "json";
    
    // Send the request
    request.send();
    
    // When the response is loaded
    request.onload = function() {
        // Check if the request was successful (status code between 200 and 299)
        if (request.status >= 200 && request.status < 300) {
            // Get the response data (posts)
            let posts = request.response;
            
            // Loop through each post and add it to the webpage
            for (let post of posts) {
                document.getElementById("content").innerHTML += `<h1>${post.title}</h1>`;
            }
        } else {
            // If there was an error, show an alert
            alert("error");
        }
    }
}
getallpostwithuseridfilter()