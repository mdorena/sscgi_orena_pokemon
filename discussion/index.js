// console.log("HELLO!");
// Functions
// DFuntipn in js are lines/blocks
// of codes that tell our device
// application to perform a certial
// task when called/invoked
// -Function declaration
// (function statement) defines a
// funtion with the specified parameters
// Parameters - are placehokders listed
// in a function declaration or ecperssion.
// They represent values that are passed
// into a functions when it is called/invoked
// Varialbes are named container for storing
// data values insted using var used let in const
// variable - used to store and manipulate data
// parameters - used data into functions

/*
Syntax:
  function functionName(){
  code block (statement)
  }

  function keyword - used to defines
  a javascript functions
  function name - funtion name


*/

function printName() {
  console.log("My name is Juan!");
}

// invoke/call funtion to run
printName();

/*
Funtion Declaration can be created throush function
declaration by using the funtion ketword and addin
a funtion keyword and adding a function name

declated funtion are not executed immedietley.
They are "save for later user" and will excuted
later , when they are invoked(called upon)

declaredFuction(); can be hoited

in the context of js, hosting is a behavoir for
certain variabkes and function to run or use them
before declaration
*/

declaredFunction();

function declaredFunction() {
  console.log("Helllooooo -from declared funtion");
}

/*
function expression - is anonymous funtion 
assign in variable
funtion can also be stored in a varibale/
This is valled a  function expression

A function expression is an anonymous function
assigned to the varibaleFunction

Anonoymous funtion - a function wothout a name,
it coonot be hoisted

*/
// varibaleFunction(); - cannot be hoisted

let varibaleFunction = function () {
  console.log("Hello again !!!!!!!");
};

varibaleFunction();
// const variables cannot redeclared
let constFunc = function () {
  console.log("Initiaized with consts");
};

constFunc();

constFunc = function () {
  console.log("Re assigned consFunct ");
};
constFunc();

// Parameters and Arguments

function printThisName(name) {
  console.log("My name is " + name);
  // name is called parameter
}

printThisName("ANGELO");
// ANGELO = argument
// a parametr acts as a named variables  containers
// that ezistas only inside funtion

// it is used a store information is procied to
// to a dfunction when it is called/invokes

/*
An arguamments is a vale passed when invoking a funtions,
this is argument is then stored as the paramaether withing
the functions
*/

printThisName("ahah", 12);

function argumentFunction() {
  console.log(
    "This function was passed as an argument before the message was printed"
  );
}

function invokeFunction(argumentFunction) {
  argumentFunction();
}
invokeFunction(argumentFunction);
// invoke function
