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