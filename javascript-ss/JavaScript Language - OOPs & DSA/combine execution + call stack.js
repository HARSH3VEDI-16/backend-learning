var x = 1;

function outer() {
  var y = 2;

  function inner() {
    var z = 3;
    console.log(x + y + z);
  }

  inner();
}

outer();