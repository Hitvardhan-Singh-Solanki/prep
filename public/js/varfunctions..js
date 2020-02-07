/**
 * In JavaScript both function declaration and variable declarations are hoisted to the top of the function, if defined in a function, or the top of the global context, if outside a function. And function declaration takes precedence over variable declarations (but not over variable assignment).

Function Declaration Overrides Variable Declaration When Hoisted

First you declare a variable:

var a; // value of a is undefined
Second, the value of a is a function because function declaration takes precedence over variable declarations (but not over variable assignment):

function a(x) {
  return x * 2;
}
And that is what you get when you call alert(a);.

But, if instead of declaring a variable you make variable assignment: var a = 4; then the assigned value 4 will prevail.
 */

function a() {
  return test;
}

var a = 10;

console.log(a);
