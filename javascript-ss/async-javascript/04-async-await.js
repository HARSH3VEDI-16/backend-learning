function fetchData() {
  return Promise.resolve("Async/Await result");
}

async function show() {
  const data = await fetchData();
  console.log(data);
}

show();