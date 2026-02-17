// dot notation
const user = {
    name1: "Harsh",
    age: 22,
    city: "surat"
};
console.log(user.city);
console.log(user.name1);
console.log(user.age);

// bracket notation
console.log(user["name1"]);
console.log(user["age"]);
console.log(user["city"]);  

//adding new property
user.country = "India";
console.log(user);
user.salary = 25000;
console.log(user);

//deleting property
delete user.city;
console.log(user);

//object.keys()
const keys = Object.keys(user);
console.log(keys);  

//object.values()
const values = Object.values(user);
console.log(values);

//object.entries()
const entries = Object.entries(user);
console.log(entries);

//spread operator
const user1 = {
    name: "Harsh",
    age: 22,    
    city: "surat"
};
const user2 = {
    ...user1,
    country: "India"
};
console.log(user2);

//object assign
const user4 = Object.assign ({}, user, { employeid: 2445 });
console.log(user4);

//hasOwnProperty()
console.log(user.hasOwnProperty("name1"));
console.log(user.hasOwnProperty("mobile no"));

//destructuring
const { age, salary} = user;
console.log(age);
console.log(salary);

//this keyword
const person = {
    name: "Harsh",
    age: 22,
    city: "surat",
    getDetails: function() {    
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
    }
};

console.log(person.getDetails());

//object.freeze()
const user3 = {
    name: "Harsh",
    age: 22,
    city: "surat"
};
Object.freeze(user3);
user3.age = 25; 

//object.seal()
const user5 = {
    name: "Harsh",
    age: 22,
    city: "surat"
};
Object.seal(user5);
user5.age = 25;
delete user5.city; 
console.log(user5);

