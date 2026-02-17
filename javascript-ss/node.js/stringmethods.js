// includes ()
const email = "ht@gmail.com";
console.log(email.includes("@")); 

// includes()
const name = "harsh trivedi";
console.log(name.includes("trivedi"));

// split ()
const sentence = "harsh trivedi";
const words = sentence.split(" ");
console.log(words);

// split ( )
const data = "car, bus, bike";
const vehicles = data.split(", ");
console.log(vehicles);

// split ( )
const fruit = "apple,banana,orange";
console.log(fruit.split(","));
// ["apple", "banana", "orange"]

// replace ()
const place = "hello surat";
console.log(place.replace("surat", "new york"));

//trim ()
const book = "  the shakespeare  ";
console.log(book.trim());

// to lowercase ()
const flowers = "LILLY, MARIGOLD, DAISY";
console.log(flowers.toLowerCase());

// to uppercase ()
const country = "russia, ukraine, germany";
console.log(country.toUpperCase()); 

//startsWith ()
const knowledge = "python is a programming language";
console.log(knowledge.startsWith("python"));

// endsWith ()
const knowlege = " i like to play football";
console.log(knowlege.endsWith("football"));

// substring ()
const academic = "harsh trivedi";
console.log(academic.substring(0, 5)); 

//slice ()
const greet = "hii everyone";
console.log(greet.slice(0, 3));

// match ()
const text = "the rain in spain stays mainly in the plain";
const matches = text.match(/ain/g);
console.log(matches);

// match ()
const liner = "I am feeling great today";
const liner1 = liner.match(/great/g);
console.log(liner1);

//at()
const y = "hii harsh trivedi";
console.log(y.at(4));

//concat()
const str1 = "hey";
const str2 = "harry";
const result = str1.concat(" ", str2);
console.log(result);

//indexof()
const z = "hey dev";
console.log(z.indexOf("dev"));

//lastindexof()
const a = "hello world";
console.log(a.lastIndexOf("d"));

//matchAll()
const text1 = "The rain in Spain stays mainly in the plain.";
const regex = /ain/g;
const matches1 = text1.matchAll(regex); 

//padStart() 
const str3 = "Harsh";
console.log(str3.padStart(8, "Mr."));

//padEnd()
const ty5 = "Trivedi";
console.log(ty5.padEnd(9, "ji"));

//repeat()
const fy2 = "bye ";
console.log(fy2.repeat(3));

//replaceAll()
const str4 = "The cat is on the roof. The cat is sleeping.";
console.log(str4.replaceAll("cat", "crow"));

//search()
const str5 = "The boy is playing.";
console.log(str5.search("boy"));

//valueOf()
const str6 = new String("Hello World");
console.log(str6.valueOf());    

//length
const th4 = "harsh trivedi";
console.log(th4.length);