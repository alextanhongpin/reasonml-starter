// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';


console.log("Hello, BuckleScript and Reason!");

function add(x, y) {
  return x + y | 0;
}

var switcher = 10;

if (switcher > 2 || switcher < 0) {
  console.log("neither");
} else {
  switch (switcher) {
    case 0 : 
        console.log("one");
        break;
    case 1 : 
        console.log("two");
        break;
    case 2 : 
        console.log("three");
        break;
    
  }
}

function message(ans) {
  if (ans) {
    console.log("It's a no!");
    return /* () */0;
  } else {
    console.log("It's a yes!");
    return /* () */0;
  }
}

console.log("It's a yes!");

console.log(11);

exports.add = add;
exports.message = message;
/*  Not a pure module */
