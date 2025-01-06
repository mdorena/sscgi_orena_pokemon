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

/* Object Oriented Programming (OOP)
OOP is programming srtle based in classes and
objects, group data(properties) and methods(actions)

class - blueprint, template for an object

object - instance of a class
instance refers to an object created from a class
or a constructor function

constuctor is a special method used 
in a class to initialize object
*/

// Basic instance
// this creates an OBJECT called person

const person = {
  name: "Juan Dela Cruz",
  age: "99",
  greet: function () {
    console.log(
      // this refers to the urrent object(person)
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

person.greet();

class Person {
  constructor(name, age) {
    this.name = name; // initializing the name property
    this.age - age; // initializing the age property
  }
  introduce() {
    console.log(
      // this refers to the urrent object(person)
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// create instance using the constructor
const person1 = new Person("Kiko", 25);
const person2 = new Person("Jun", 17);
person1.introduce();
person2.introduce();

class Car {
  constructor(model) {
    this.model = model;
  }
  start() {
    console.log(`${this.model} is starting . . .`);
  }
}

const car1 = new Car("Toyoto");
car1.start();

// Pokemon Game
class Pokemon {
  constructor(name, type, level, hp) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
  }
  attack(opponent) {
    console.log(`${this.name} attack ${opponent.name}`);
    let damage = this.level * 2;
    this.level = damage;
    console.log(`Pikachu level up to ${damage}`);
    opponent.damageRecieved(10);
  }
  heal() {
    this.hp + 50;
    console.log(`${this.name} HEALS now has ${this.hp} HP`);
  }
  damageRecieved(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      console.log(`${this.name} has fainted!`);
    } else {
      console.log(`${this.name} has ${this.hp} HP left`);
    }
  }
  heal() {
    this.hp += 10;
    console.log(`${this.name} has 10 HP! Current HP: ${this.hp}`);
  }
}
// class Trainer {
//   constructor(name, pokemons) {
//     this.name = name;
//     this.pokemons = pokemons;
//   }
//   count() {
//     console.log(this.pokemons.length);
//   }
//   tame(pokemon) {
//     console.log(`A wild ${pokemon.name} appeared!`);
//     console.log(`I need to catch it!`);
//     this.pokemons += pokemon;
//     console.log(`Gotcha! ${pokemon.name} was caught!`);
//     console.log(`${this.name} has now ${this.pokemons.length} Pokemons`);
//   }
// }

// picachu.attack(charmander);
// charmander.heal();
// charmander.attack(picachu);

/*
// Encapsulation
refers to
of data (properties) and the
functions) that operatate on
within a single unit or clas
the bundling
methods (
the data
*/

/*
Abstaction example is battle automatically exexcuted 

abstraction it invloves simplfying the complex
sytems by exposing only the essential features

Enheretance - extende the pokemon class into specific type of pokemon
  Electic Pokemon
  FirePokemon
    each subclasss will inherit properyies and method
    from the base pokemon class but can have its own 
    specific behavior
*/

class ElecticPokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Electric", level, hp);
  }
  // polymotphism: override attack() method for elecric pokemon

  attack(opponent) {
    console.log(`${this.name} uses Thunderbolt on ${opponent.name}`);
    let damage = this.level * 3;
    opponent.damageRecieved(damage);
  }
}

/* 
polymotphism the ability of different classes to respond
to the same method call in a way that's specific to thier tyoe.
It allows one interface(method) to be  used for generala class of
action with each subclass implement the methodin its own way



Methond overriding - subclasses can provide their own specific implementation of 
a method that is already defiene  in the parent class

Method overloading - different methond with the same
name can be defined with different parameterts, 

Dynamic method resolution - the method that gets called
depends on object tyoe (not the reference type), which
is determined in runtime
*/
class FirePokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Fire", level, hp);
  }

  attack(opponent) {
    console.log(`${this.name} uses Fire Attack on ${opponent.name}`);
    let damage = this.level * 50;
    opponent.damageRecieved(damage);
  }
}
let picachu = new Pokemon("Pikachu", "Electric", 5, 100);
let charmander = new FirePokemon("Charmander", 5, 100);
charmander.attack(picachu);
