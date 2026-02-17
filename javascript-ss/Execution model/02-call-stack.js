function one() {
  two();
}

function two() {
  console.log("Two");
}

one();