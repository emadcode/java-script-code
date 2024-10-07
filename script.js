function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate a network request using setTimeout
    setTimeout(() => {
      let success = true;
      
      if (success) {
        resolve("Data fetched successfully omda!");
      } else {
        reject("Failed to fetch data!");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // "Data fetched successfully!"
  })
  .catch((error) => {
    console.log(error); // "Failed to fetch data!" if an error occurs
  });
