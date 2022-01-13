//Write a program to input 2 numbers and display the sum of the numbers to the console.
const sumOfTwoNumbers = (a,b) => a+b;

//Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest
const simpleIntreset = (p,r,t) => (p * r * t)/100;

//Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
const getKE = (m,v) => 0.5 * m * v * v;

//Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.
const fahrenheitToCelsius = (F) => (F-32)*0.5;

//Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.
const structureTheSqaure = (a) => {
  const area = a * a;
  return {
    area,
    perimeter: 4*a,
    surfaceArea: 6*area,
    volume: area*a,
  }
}

//Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.
const ProfitOrLoss = (CP,SP) => {
  let diffr = SP - CP;
  return SP > CP ? `${diffr} profit` : SP === CP ? `No Profit No Loss` : `${-diffr} loss`; 
}

//Write a program to calculate sum of N natural digits, as input by the users?
const sumOfNaturalDigits = (N) => (N * (N+1)) / 2;

//Write a Program to Print N Odd Number in Descending Order.
const logNOddNumbers = (N) => {
  if(N === 1) return 1;
  let array = [];
  for(let xi=1,yi=3; xi<=N; xi=xi+4,yi=yi+4)
    array.push(xi,yi);   
  return array.reverse();
}

//Write a JavaScript program to compute the sum of all digits that occur in a given string. 
const sumOfDigits = (astring) => astring.split("").reduce( (acc,i) => acc+Number(i),0);

//Write a JavaScript program that reverses a number.
const reverseNumber = (num) => {
  let reverse='';
  while(num > 0){
    reverse += num % 10;
    num = (num/10).toFixed();
  }
  return Number(reverse);
}

//Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.
const rotate = (num,X) => Number(`${ (''+num).slice(X)}${ (''+num).slice(0,X)}`)

//Write a Program to convert Decimal to Binary.
const decToBin = (num) => num.toString(2);
//Follow up Question : Write a Program to Convert Octal to Decimal.
const octToDec = (decNum) => {
  let num = ''+decNum;
  let n = num.length-1;
  let octNum = 0;
  let index = 0;

  while(n >= 0)
  {
    octNum += (8 ** n)*(Number(num[index]));
    --n;
    ++index;
  }

  return octNum;
}
