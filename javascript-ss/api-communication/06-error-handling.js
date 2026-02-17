async function getUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!res.ok) {
      throw new Error("API failed");
    }

    const data = await res.json();
    console.log(data.name);

  } catch (error) {
    console.log("Error:", error.message);
  }
}

getUser();