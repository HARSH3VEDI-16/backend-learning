function task(time) {
  return new Promise(res => setTimeout(res, time));
}

async function run() {
  console.time("parallel");

  await Promise.all([
    task(1000),
    task(1000)
  ]);

  console.timeEnd("parallel");
}

run();