async function test() {
  try {
    throw new Error("Error happened");
  } catch (err) {
    console.log(err.message);
  }
}

test();