//Given a and b, your function should return the value of ab
const power = (a,b) => a ** b;

//Given length of a regular hexagon, your function should return area of the hexagon.
const areaOfHexagon = (a) => 2.59 * (a * a);

//Given a sentence, your functions should return the number of words in the sentence.
const noOfWords = (sentence) => sentence.split(" ").length;

//Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
const findMin = (...rest) =>  rest.reduce( (acc,current) => current < acc ? current : acc ,Number.MAX_VALUE);

//Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
const findMax = (...rest) =>  rest.reduce( (acc,current) => current > acc ? current : acc ,Number.MIN_VALUE);

//Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. 
const typeOfTriangle = (firstAngle,secondAngle,thirdAngle) => {
      const sumOfAngles = firstAngle+secondAngle+thirdAngle;
      if(sumOfAngles !== 180)
            return "Not a triange";
      if(firstAngle === 60 && secondAngle === 60 && thirdAngle === 60)
            return "Equilateral triange";  
}

//Given an array, your function should return the length of the array.
const arrayLength = (arr) => arr.length;

//Given an array and an item, your function should return the index at which the item is present.
const indexOf = (arr,item) => {
      const index = arr.indexOf(item);
      return index !== -1 ? index : `Hey your not in my collection: ${item}`
}

//Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
const replace = (array,org,rep) => array.map(item => item !== org ? item : rep);

//Given two arrays, your function should return single merged array.
const mergeArray = (array1,array2) => [...array1,...array2]; 

//Given a string and an index, your function should return the character present at that index in the string.
const charAt = (astring,index) => astring.charAt(index);

//Given two dates, your function should return which one comes before the other.
const minDate = (date1,date2) => {
      const [day1,month1,year1] = date1.split('/').map( d => Number(d));
      const [day2,month2,year2] = date2.split('/').map( d => Number(d));

      if(year1 !== year2)
            return year1 < year2 ? date1 : date2;
      else if(month1 !== month2)
            return month1 < month2 ? date1 : date2;
      else if(day1 !== day2)
            return day1 < day2 ? date1 : date2;
      else return "Both dates are equal";

};

//Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places.
const encodeString = (astring,n) => {
      let CharCodes = [...astring].map( (_,i) => astring.charCodeAt(i)+n);
      return String.fromCharCode(...CharCodes);
}

//Given a sentence, return a sentence with first letter of all words as capital.
const toSentenceCase = (astring) => astring.split(" ").map( i => `${i[0].toUpperCase()}${i.slice(1)}`).join(' ');

//Given an array of numbers, your function should return an array in the ascending order.
const sortArray = (array) => array.reduce( (acc,i) => i < acc ? i : acc, Number.MAX_VALUE);

//Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
const reverseCharactersOfWord = (sentence) => sentence.split(" ").map( i => [...i].reverse().join("") ).join(" ");