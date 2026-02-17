const promise = new Promise((resolve, reject) => {
  resolve("Promise done");
});

promise.then(result => console.log(result));