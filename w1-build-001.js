//Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
const reduce = (array, func, start) => {
  let current = start;
  array.forEach((item) => {
    current = func(item, current);
  });
  return current;
};

const array = [5, 13, 7, 21, 48];
const func = (num1, num2) => num1 + num2;

const sum = reduce(array, func, 0);

//Write a program to take a number input from user and determine whether the number is odd or even.
const isEvenOrOdd = (num) => (num % 2 === 0 ? 'even' : 'odd');

//Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251
const getMaxMin = (num1, num2) => {
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;

  if (num1 > num2) {
    max = num1;
    min = num2;
  } else {
    max = num2;
    min = num1;
  }

  return { max, min };
};
let { max, min } = getMaxMin(129, 251);

//Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17
const maxOutOfThree = (a, b, c) =>
  a >= b && a >= c ? a : b >= a && b >= c ? b : c;

//Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
const minOutOfThree = (a, b, c) =>
  a <= b && a <= c ? a : b <= a && b <= c ? b : c;

//Write program to take a month as an input from the user and find out whether the month has 31 days or not.
const isMonthThiryOneDaysLong = (month) => {
  let months = {
    jan: 31,
    feb: 28,
    mar: 31,
    apr: 30,
    may: 31,
    jun: 30,
    jul: 31,
    aug: 31,
    sep: 30,
    oct: 31,
    nov: 30,
    dec: 31,
  };
  return months?.month ?? 'Month does not exsist';
};

//Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
const range = (start, end) => {
  let array = [];

  for (; start <= end; ++start) array.push(start);

  return array;
};

const fizzbuzz = () => {
  let array = range(1, 100);

  array.forEach((_, index) => {
    const isMultipleOfThree = array[index] % 3 == 0;
    const isMultipleOFFive = array[index] % 5 == 0;

    array[index] =
      isMultipleOfThree && isMultipleOFFive
        ? 'FizzBuzz'
        : isMultipleOfThree
        ? 'Fizz'
        : isMultipleOFFive
        ? 'Buzz'
        : array[index];
  });

  return array;
};

//Write a program to take a number input from user and print multiplication table 12 times for that number.
const logMultiplicationTableNTimes = (num, n) => {
  let res = [];

  for (let xi = 1; xi <= 10; ++xi) res.push(num * xi);

  for (let xi = 0; xi < n; ++xi)
    res.forEach((r, i) => {
      console.log(`${num} X ${++i} = ${r}`);
    });
};

//Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
const fiboonacciSeries = (n) => {
  const array = [];

  if (n === 1) return [0];
  else if (n === 2) return [0, 1];

  array.push(0);
  array.push(1);

  for (let xi = 2; xi < n; ++xi) {
    let next = array[xi - 1] + array[xi - 2];
    array.push(next);
  }

  return array;
};

//Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120
const factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

//Write a Program to take a number input from user and find if the number is Prime or not
const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

//Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.
const isDayWeekdayorWeekend = (day) => {
  const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

  const d = day.toLowerCase();

  return `${day} is ${weekdays.includes(d) ? 'weekday' : 'weekend'}.`;
};

//Print the following star pattern :-
/**
 *
 * *
 * * *
 * * * *
 * * * * *
 */
const logPattern = (n) => {
  const p = '* ';
  for (let xi = 1; xi <= n; ++xi) {
    let pattern = '';
    for (let yi = 1; yi <= xi; ++yi) {
      pattern += p;
    }
    console.log(pattern);
  }
};
