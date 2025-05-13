/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 2. var, let, const //
/*
var -  You can initialize variables without a value ex: var age; the value of this variable is undefined.
Var can also be reassigned at any point and are  globally or function scooped. The problem is var variables can be redefined and redeclared but this overrides whatever declaration you had before. This is why other variable declarations were made. 

let - Can be initialized without a value and can be reassigned at any time. They can take a variable with no data but variables with let cannot be redeclared like they can with var. 
Let variables are only blocked scooped, meaning they can only be accessed within the block they are defined in.

const - (variable should be constant in code) will not be reassigned at any point, they can't be initialized without a value and must be assigned a piece of data at point of initiation. They also can not be redeclared. 
Const variables are also block scooped, only can be access within the block of code it was created
*/

//3. Hoisting //

//What is hoisting? 
//Hoisting occurs in the background of the computer.
//The interpreter loads all variable and function declarations
//to the top of their current scope before execution of code.

//For the the var keyword the value isnt hoisted but the declaration is. For the function key word the function
//body is hoisted over var declarations (cant be annonymous). 
//functions are hoisted with their defintions. 

//Once variable and function declaration are hoisted they are then executed.
//Should always initialize at the top of scope, use function declaration over expressions.
//The same rules apply for let and const but the declarations are block scoped(for if blocks)


/* 
DATATYPES 

0: In Javascript there are primitive and complex datatypes. The primative datatypes include string, 
number, boolean, undefined, null and NaN. The complex datatypes are array, object, functions. 

Primative: 
var string = 'hello'
var number = 5;
var boolean = true/false OR var boolean = 1 === '1'
var myObj = {}
console.log(myObj.name) = undefined
var myObj = {}
console.log(myObj) = null
console.log(0/0) = NaN


Complex:
var myArray = [1,2,3]
var myObject = {key: value}
var myFunc = function(parameter){

}

1: The difference between primitive and complex datatypes is that they store and handle data differently.
Primitive types are immutable values stored directly in the location the variable accesses, while complex 
types are mutable collections of data, stored by reference.


2: Primative values are passed by copy and complex values are passed by refrence.
When a variable that is being refrenced points to a primative data type, a copy of the value is created.

var x = 1;  var x ---> 1 //pointed to its own copy 
var y = x;  ^
var y = 1;  | 
            var y ---> 1


When a variable that is being refrenced points to a complex data type, a refrence to the value is created.
Comparing two complex datatypes is really comparing two refrences.


var x = {}; var x ---> {} //pointed to refrence of first value
var y = x;  ^         / 
var y = {}  |        /
            var y   /


*/

/*
OPERATORS 

0: Operators are symbols or keywords that perform operations on values (operands). 
These operations can include arithmetic calculations, comparisons, logical evaluations, and assignments.

1: Assignment Operators assign values to variables.

Ex: 
= (Assignment)
+= (Add and assign)
-= (Subtract and assign)
*= (Multiply and assign)
/= (Divide and assign)
%= (Modulus and assign)
**= (Exponentiate and assign)

2: Arithmatic Operators peform mathematical calculations.

Ex:
+ (Addition)
- (Subtraction)
* (Multiplication)
/ (Division)
% (Modulus/Remainder)
** (Exponentiation)
++ (Increment)
-- (Decrement)

3: Comparison Operators compare values and return a boolean result.

Ex: 
== (Equal to)
!= (Not equal to)
=== (Strictly equal to, checks type and value)
!== (Strictly not equal to)
> (Greater than)
< (Less than)
>= (Greater than or equal to)
<= (Less than or equal to)

4: Logical Operators combine or modify boolean expressions.

Ex:
&& (Logical AND)
|| (Logical OR)
! (Logical NOT)

5: Ternary Operator is a shorthand for if...else statements.

Ex:
condition ? expression1 : expression2

a condition followed by a question mark (?), 
then an expression to execute if the condition is truthy followed by a colon (:),
and finally the expression to execute if the condition is falsy.

6: Unary Operators act on a single operand to perform actions such as
incrementing, decrementing, or negating a value. They can be categorized as 
prefix (operator before operand) or postfix (operator after operand).

Ex: 
let x = 5;
let y = -x; // y is -5

Ex:
let x = 5;
let y = ++x; // x is 6, y is 6
let a = 5;
let b = a++; // a is 6, b is 5

*/

/*

STRING MANIPULATION

0: String manipulation is the process of modifying or extracting information from strings. This can be achieved 
by using different methods or operators. 

1: String manipulation with operators primarily focuses on concatenation and modificaiton. 

Ex:
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2; // "Hello World"

Ex:
let num = 123;
let combined = str1 + num; // "Hello123"

Ex:
"apple" < "banana" // true
"123" > "12" // true

Ex: 
"hello" == "hello" // true
"Hello" === "hello" // false (case-sensitive)

2: String manipulation with string methods return new strings. 

Ex:
charAt(): Returns the character at a specified index.
concat(): Joins two or more strings.
indexOf(): Returns the index of the first occurrence of a specified value in a string. 
lastIndexOf(): Returns the index of the last occurrence of a specified value in a string. 
slice(): Extracts a section of a string and returns it as a new string. 
split(): Splits a string into an array of substrings.
substring(): Returns the characters in a string between two specified indices.
replace(): Replaces a specified value with another value in a string.
replaceAll(): Replaces all occurrences of a specified value with another value in a string.
toLowerCase(): Converts a string to lowercase.
toUpperCase(): Converts a string to uppercase.
trim(): Removes whitespace from both ends of a string.
startsWith(): Checks if a string begins with specified characters.
endsWith(): Checks if a string ends with specified characters.
includes(): Determines if one string includes another.
padStart(): Pads a string from the start until it reaches the specified length.
padEnd(): Pads a string from the end until it reaches the specified length. 
repeat(): Returns a string with a number of copies of the given string. 
*/

/*
CONTROL FLOW

0: Control flow refers to the order in which the code is executed. By default, JavaScript code runs 
sequentially from top to bottom. Control flow statements alter this sequential execution, allowing 
for more complex logic and decision-making. There are mainly two types of control 
flow statements: conditional statements and loops.

1: Conditional statements involve if, else if and else statement. 

Ex:
if (condition) {
  // Code to execute if condition is true
}

Ex:
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}

Ex:
if (condition1) {
  // Code to execute if condition1 is true
} else if (condition2) {
  // Code to execute if condition1 is false and condition2 is true
} else {
  // Code to execute if both condition1 and condition2 are false
}


2: Switch Statements evaluate an expression, matching the expression's value against
a series of case clauses and executes statements after the first case clause with a matching value, 
until a break statement is encountered. If no case matches the expression's value, the default clause is executed, if present.

Ex:
switch (expression) {
case value1:
// statements to execute if expression === value1
break;
case value2:
// statements to execute if expression === value2
break;
// ... more cases
default:
// statements to execute if no case matches
}

*/

/*
LOOOPS

0: You use while loops when you want to repeat a block of code as long as a specific condition is true.

Ex:
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

0: You use for loop when you know ahead of time how many times you want to loop.

Ex:
for (initialization; condition; increment) {
  // code to execute
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

0: You use for in loops when want to iterate over the properties of an object.

Ex:
for (let key in object) {
  // code to execute
}

const person = {
  name: 'Alice',
  age: 25,
  city: 'New York'
};

for (let key in person) {
  console.log(key + ":" + person[key]);
}

1: Be able to loop any number of times, forward counting up to some limit, backward counting down to 0. 

Ex:
let limit = 5;

// Forward count: 0 to limit
for (let i = 0; i <= limit; i++) {
  console.log(i);
}

// Backward count: limit - 1 down to 0
for (let i = limit - 1; i >= 0; i--) {
  console.log(i);


*/

/*
FUNCTIONS

0: Funtions are blocks of reusable code that are used to perform a specififc task.

1: The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) 
a function by? Using a function in JavaScript involves two primary phases: the creation phase and the execution phase.

2: Parameters are variables declared in a function's definition, serving as placeholders for values the function expects to receive. 
Arguments, on the other hand, are the actual values passed to the function when it is called

Ex:

let myFunc = function(param1, param2){

}

3: Syntax for named function expression: 
var myFunc = function(){ --> name = myFunc

}

4: Assigning function to a variable

Ex:
function myFunction() {
  return "Hello, world!";
}

const myVariable = myFunction;

5: In funtions to specify inputs we make parameters and they act as a placeholder for an actual value. To specify outputs we use the 
return keyword to output a value from the funtion.


*/

/*
SCOPE

Ex:
// Global scope
var globalVar = "I am global";

function exampleFunction() {
  // Function scope
  var functionVar = "I am inside the function";
  console.log(functionVar); // Accessible within the function

  if (true) {
    // Block scope (within if statement)
    let blockVar = "I am inside the block";
    console.log(blockVar); // Accessible within the block
  }

  // console.log(blockVar); // Error: blockVar is not defined outside the block
}

exampleFunction();
console.log(globalVar); // Accessible everywhere
// console.log(functionVar); // Error: functionVar is not defined outside the function
 */

/*
CLOSURE 

EX:
function outerFunction(x) {
  let innerVar = 4;

  function innerFunction() {
    return x + innerVar;
  }
  return innerFunction;
}

let closure = outerFunction(2);
console.log(closure()); // Output: 6

In this example, innerFunction is a closure. It retains access to x and innerVar from outerFunction's scope,
 even after outerFunction has returned. When closure() is called, it still remembers the value of x 
 (which was 2 when outerFunction was called) and innerVar (which is 4), and returns their sum. 
*/
