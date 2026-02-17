//map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x + 2);
console.log(doubled); 

//map
const flowers = ["daisy", "marigold", "lilly"];
const lengths = flowers.map(flowers => flowers.length);
console.log(lengths);

//filter
const ages = [32, 33, 16, 40];
const adults = ages.filter(age => age >= 18);
console.log(adults);

//filter
const integer = [17,68,30,14];
const small = integer.filter(age => age < 18);
console.log(small);

//filter    
const lists = ["car", "bike", "rickshaw", "train"];
const list1 = lists.filter(list => list.length > 3);
console.log(list1);

//find
const num1 = [2, 15,17,9,20];
const result1 = num1.find(num1 => num1 > 15);
console.log(result1);

//reduce
const num2 = [2, 3, 6, 1];
const sum = num2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);   

//push
const vegetables = ["carrot", "broccoli", "spinach"];
vegetables.push("cabbage");
console.log(vegetables); 

//pop
const colors = ["blue", "gray", "red"];
colors.pop();
console.log(colors);

//includes
const surnames = ["patel", "pandya", "trivedi"];
 console.log(surnames.includes("pandya"));

 //some
const ages1 = [3, 10, 18, 20];
const hasAdult = ages1.some(age => age >= 18);
console.log(hasAdult);  

//every
const ages2 = [3, 10, 18, 20];
const allAdults = ages2.every(age => age >= 18);
console.log(allAdults);

//forEach
const colors1 = ["black", "blue", "violet"];
colors1.forEach(color => console.log(color));    

//reverse;
const fruits3 = ["orange", "peach","guava"];
console.log(fruits3.reverse());

// shift
const numbers1 = [1, 2, 3, 4, 5];
numbers1.shift();
console.log(numbers1);

// unshift
const num4 = [3,4,5];
num4.unshift(1,10);
console.log(num4);


//splice
const months = ["January", "March", "April", "June"];
months.splice(1, 0, "February");
console.log(months);    

//splice
const days = ["Monday", "Tuesday", "Thursday", "Friday"];
days.splice(2, 0, "Wednesday");
console.log(days);


