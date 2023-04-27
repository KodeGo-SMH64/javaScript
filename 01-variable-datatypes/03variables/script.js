//Ways to declare variable
// var, let & const

let firstName = "Juan";
const lastName = "Cruz";
console.log(firstName, lastName);

let age = 30;

console.log(age);

//Naming Conventions
//Only letters, numbers, underscores,  adn dollar signs
// Cant start with a number

// Multiword-Word Formatting
//firstName = camelCase
//first_name = underscore
// FirstName = PascalCase
//firstname = lowercase

// With let, we can declare a value without assigning a value

let score;
score =1;
console.log(score);

if (true) {
    score = score + 1;
}

console.log(score);

const x = 100;

// We cannot re-assign value to const
// x = 200;
console.log(x);

const arr = [1, 2, 3, 4];
// arr = [1, 2, 3, 4, 5]
// we cannot manipulate arrays and objects using const
arr.push(5);
console.log(arr);

const person = {
    name: "Ryan",
    };
    person.name = "Alden";
    person.email = "ryan@gmail.com";
    console.log(person);
    

