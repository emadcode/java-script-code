let getData = new Promise((resolve, reject) => {
    let success = true;
  
    if (success) {
      resolve("Data fetched successfully.");
    } else {
      reject("There's an issue, data not fetched.");
    }
  });




  //getData
 // .then((message) => {
    //console.log(message); // "Data fetched successfully."
  //})
  //.catch((error) => {
   // console.log(error); // "There's an issue, data not fetched."
 // });


 //Why do we use Promises?

//The idea behind using Promises is that they 
//help us perform tasks like fetching data from a server without stopping the res
//t of the program. The program keeps running,
// and once the data is received or an error occurs, 
// we handle the result through then or catch.