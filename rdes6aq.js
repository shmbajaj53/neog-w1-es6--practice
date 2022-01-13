//Try converting these codes to ES6 syntax-
//--------------------------------------------------------------------------------------------------------------------------------
/**
var aloo = 1;
if (aloo == 1) {
   var a = 2;
   console.log(a);
}
console.log(aloo);
 */
export const alooChat = (allo) => allo == 1 ? 2 : allo;
console.log({alooChat});

/*var multiply = function(x, y) {
  return x * y;
}; */
export const multiply = (x,y) => x*y;
console.log(`Multiplying 55 X 66 == ${multiply(55,66)}`);

/*
var customer = {
  name: "Bhaalo"
};
var card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50
};
var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"*/
let customer = {
  name: "Bhaalo"
};
let card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50
};
export let message = `Hello ${customer.name} wants to buy ${card.amount} ${card.product} for price of ${card.unitprice} per piece.`
console.log({message});

/**var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
CEO = Neog[0],
Mentor = Neog[2]; */
let Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
//doubt => How CEO, ,Mentor Will be exported
export let [CEO,,Mentor,...rest] = Neog;
console.log({CEO},{Mentor});

/**var arr = ["MA", "TA", "PA", "CA"];
var firstName = arr[0],
var surname = arr[1];
console.log(firstName);
console.log(surname); */
let arr = ["MA", "TA", "PA", "CA"];
export let [firstName,surname,...rest] = arr;

/**var Aaloo = "Tasty";
var Bhaloo = "Cute";
var Obj = {
  Aaloo: Aaloo,
  Bhaloo: Bhaloo
}; */
let Aaloo = "Tasty";
let Bhaloo = "Cute";
export let Obj = {Aaloo,Bhaloo};

/**
 * var a = 5;
var b = 10;
console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));
 */
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and n0t ${2 * a + b}.`);

/** var arithmeticsObj = {
  sum: function sum(num1, num2) {
    return num1 + num2;
  },
  multiply: function multiply(num1, num2) {
    return num1 * num2;
  }
};*/
export let arithmeticsObj = {
  sum: (num1, num2) => num1+num2,
  multiply: (num1, num2) => num1*num2,
};

/**
 * var avengers = {
  operation: "Assemble",
  members: [
    {
      ironMan: "Tony Stark"
    },
    {
      captainAmerica: "Steve Rogers"
    },
    {
      blackWidow: "Natasha Romanoff"
    }
  ]
};
var operation = avengers.operation,
  members = avengers.members;
 */
let avengers = {
    operation: "Assemble",
    members: [
      {
        ironMan: "Tony Stark"
      },
      {
        captainAmerica: "Steve Rogers"
      },
      {
        blackWidow: "Natasha Romanoff"
      }
    ]
  };
export let {operation,members} = avengers;
//--------------------------------------------------------------------------------------------------------------------------------

//2. Convert ES6 to ES5
    
/**
 * const packIt = (...args) => console.log(args)
packIt(1,2,3,5,5)
 */

export function packIt(){
  console.log({arguments});
}

//3.Guess the output

const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome); //Namaste Welcome

const obj = {
  aloo : 1,
  bhallo : 2
}

//const {c : aloo = [2,3,4].push(5), aloo} = obj 

//console.log(aloo)

//mine => 1
//outcome => Uncaught SyntaxError: Identifier 'aloo' has already been declared