
#### 1) What is the difference between var, let, and const?
Answer: 
var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.
let: Declares variables with block scope, allowing updates but not re-declaration within the same block.
const: Declares block-scoped variables that cannot be reassigned after their initial assignment.

#### 2) What is the difference between map(), forEach(), and filter()? 
Answer: 
map() : Creates a new array by applying a function to each element.
forEach() : Executes a function for each element, but doesn't return a new array.
filter() : Creates a new array containing only elements that pass a specific condition. 
#### 3) What are arrow functions in ES6?
Answer: Arrow functions allows a shorter syntax for function expressions. You don't need the function keyword, the return keyword, and the curly brackets:

#### 4) How does destructuring assignment work in ES6?
Answer: 
Array Destructuring: It lets easily grab values from an array and assign them to variables, instead of using the array's index.
Object Destructuring: This helps pick properties from an object and store them in variables, making your code easier to read and understand.
Default Values: We can set a backup value for variables while destructuring. If something is missing or undefined, the default will be used instead.
Skipping Items: In arrays, we can choose to ignore certain values while destructuring, focusing only on the ones you need.
Nested Destructuring: It helps pull values from objects or arrays within other objects or arrays, all in one go, making the code shorter and more efficient.

#### 5) Explain template literals in ES6. How are they different from string concatenation?
Answer: Template literals are string literals enclosed by backticks (`` ` ``) instead of single or double quotes.

The primary differences between template literals and traditional string concatenation (using the + operator)
Concatenation: Requires the + operator to join strings and variables, which can become verbose and less readable with multiple variables or complex expressions. And
Template Literals: Offer a cleaner and more intuitive syntax for embedding variables and expressions directly within the string using ${}.
