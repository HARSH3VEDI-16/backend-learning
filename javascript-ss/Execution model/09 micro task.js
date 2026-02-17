console.log("start");

Promise.resolve().then(() => console.log("promise"));

setTimeout(() => console.log("timeout"), 0);

console.log("end");