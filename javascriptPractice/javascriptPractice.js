/*Write a function called add7 that takes one number and returns that number + 7.*/

function add7(num) {
    return num + 7 
}

console.log(add7(10))

/* 2. Write a function called multiply that takes 2 numbers and returns their product.*/

function multiply(num1, num2) {
    return num1*num2
}

console.log(multiply(3, 2))

/* 3. Write a function called capitalize that takes a string and returns that string with the first letter capitalized.*/

function capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.substring(1).toLowerCase()
}

console.log(capitalize("abcd"))
console.log(capitalize("ABCD"))
console.log(capitalize("aBcD"))


/* 4. Write a function called lastLetter that takes a string and returns the last letter.*/

function lastLetter(string) { 
    return string.slice(-1)
}

console.log(lastLetter("abcd"))


/* You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

 */

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map( (person) => {
    return { fullName: person.name + " " + person.surname, id:person.id};
})

console.log(usersMapped);

/* Map to names */
john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };

users = [ john, pete, mary ];

let names = users.map((user) => user.name);
console.log(names);

/* Sort users by age */
john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 29 };

let arr = [ pete, john, mary ];

console.log(arr.sort((a,b) => a.age - b.age));

// Get average age
let avg = arr.reduce( (acc, user) => acc + user.age, 0) / users.length

console.log(avg);

// Create keyed object from array

users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = users.reduce( (acc, user) => acc[user.id] = user, {});
console.log(usersById)