function getData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

getData((data) => {
  console.log(data);
});