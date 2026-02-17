const person = {
  name: "Alex",
  say() {
    console.log(this.name);
  }
};

person.say();