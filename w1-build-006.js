/*
Given an array of objects of student's marks:

    Print the name and total marks of each student.
    Print the name of student whose total marks is highest.
    Print the name of student whose total marks is lowest.
    Print the average marks of the class in computer subject.
    Print the grades of all students:
    Grade A if total marks is higher than or equal to 75%,
    Grade B if higher than or equal to 60%,
    Grade C if higher than or equal to 35%,
    Grade D if lower than 35%.
    Print the total number of students passed and their names. Pass when total marks is greater than 35%.
 */
const studentDetails = [
  {
    roll: '1',
    name: 'Rohan Singh',
    maths: 86,
    science: 90,
    english: 75,
    computer: 85,
  },
  {
    roll: '2',
    name: 'Ritvik Patel',
    maths: 27,
    science: 30,
    english: 35,
    computer: 30,
  },
  {
    roll: '3',
    name: 'Neha Maurya',
    maths: 75,
    science: 69,
    english: 40,
    computer: 75,
  },
  {
    roll: '4',
    name: 'Mohit Verma',
    maths: 21,
    science: 31,
    english: 45,
    computer: 40,
  },
  {
    roll: '5',
    name: 'Karan Trivedi',
    maths: 70,
    science: 80,
    english: 35,
    computer: 60,
  },
];

const studentDetailsTMS = studentDetails.map((stud) => {
  const { name, maths, science, english, computer } = stud;
  const totalMarks = maths + science + english + computer;
  return { name, totalMarks };
});

console.table(studentDetailsTMS);

const { name: lname, totalMarks: lTotalMarks } = studentDetailsTMS.reduce(
  (acc, stud) => (stud.totalMarks < acc.totalMarks ? stud : acc),
  { name: 'NA', totalMarks: Number.MAX_VALUE }
);
console.log(`Lowest total marks: ${lTotalMarks} by ${lname}`);

const { name: hname, totalMarks: hTotalMarks } = studentDetailsTMS.reduce(
  (acc, stud) => (stud.totalMarks > acc.totalMarks ? stud : acc),
  { name: 'NA', totalMarks: Number.MIN_VALUE }
);
console.log(`Highest total marks: ${hTotalMarks} by ${hname}`);

const avgMarksInCompSubj = (
  studentDetails.reduce((acc, { computer }) => acc + computer, 0) /
  studentDetails.length
).toFixed();
console.log(`Average marks in computer subject: ${avgMarksInCompSubj}`);

let failed = 0;
const studentDetailsGradeandResult = studentDetailsTMS.map(
  ({ name, totalMarks }) => {
    const totalMarksPerc = (totalMarks / 4).toFixed();
    const grade =
      totalMarksPerc >= 75
        ? 'A'
        : totalMarksPerc >= 60 && totalMarksPerc < 75
        ? 'B'
        : totalMarksPerc >= 35 && totalMarksPerc < 60
        ? 'C'
        : 'D';
    let pass = true;
    if (grade === 'D') {
      pass = false;
      ++failed;
    }

    return { name, grade, pass };
  }
);
console.table(studentDetailsGradeandResult);

const totalStudentsPassed = studentDetailsGradeandResult.length - failed;
const studentPassedNames = studentDetailsGradeandResult.filter(
  ({ name, _, pass }) => pass
);
console.log(
  `Total students passed are: ${totalStudentsPassed} and their names are: ${studentPassedNames
    .map(({ name }) => name)
    .join(', ')}.`
);

/**
 * Given an array of objects of items in cart, print:

    the total No. of items
    the total cart value
    the total discounted value(sum of dicounted values on each item) based on the given discount
    total tax amount (18% tax, calculated on total cart value)

 */

const cartItems = [
  {
    id: '101',
    name: 'Oreo',
    count: 2,
    price: 30.0,
    discount: 0.18,
  },
  {
    id: '102',
    name: 'Red Bull',
    count: 1,
    price: 99.0,
    discount: 0.15,
  },
  {
    id: '103',
    name: 'Dairy Milk Silk',
    count: 3,
    price: 175.0,
    discount: 0.05,
  },
  {
    id: '104',
    name: 'Pulse Candy Pack',
    count: 1,
    price: 135.0,
    discount: 0.2,
  },
];

const totalNumberOfItemsInCart = cartItems.reduce(
  (acc, { count }) => acc + count,
  0
);
console.log(`Total number of items in cart: ${totalNumberOfItemsInCart}`);

const totalCartValue = cartItems
  .reduce(
    (acc, { count, price, discount }) => acc + (price - discount) * count,
    0
  )
  .toFixed(2);
console.log(`Total cart value: ${totalCartValue}`);

const totalDiscountedValue = cartItems
  .reduce((acc, { count, discount }) => acc + discount * count, 0)
  .toFixed(2);
console.log(`Total discounted value on cart items: ${totalDiscountedValue}`);

const taxAmount = ((totalCartValue * 18) / 100).toFixed(2);
console.log(
  `Total tax amount: ${totalDiscountedValue} on cart value: ${totalCartValue}`
);

/*
Salary calculation using OOPS concept.

    Create a Class using ES6 in JavaScript named Employee and assign necessary
    data members and methods such as name, id, basic salary, HRA, Allowances; define getSalary method which will return the net salary.
    Create two Instances of Employee with all necessary details.
    Call the getSalary method of each instance and return the net salary based on your computation.
 */
function Employee(name,id,basicSalary,hra,allowances)
{
  this.name = name;
  this.id = id;
  this.basicSalary = basicSalary;
  this.hra = hra;
  this.allowances = allowances;
}

Employee.prototype.getSalary = function () { return this.basicSalary + this.hra + this.allowances.reduce((acc,curr) => acc+curr) };

const emp1 = new Employee("Arun Kumar Js",109904,16000,3000,[199,200]);
const emp2 = new Employee("Vishwa KG",109906,12000,3000,[199,200]);

console.log(emp1.getSalary());
console.log(emp2.getSalary());

/**
 * Bank Account (Object Oriented Programming in JavaScript)

    Create a class and define data members such as name, bank account number,
    account balance, account type, ifsc and name it as BankAccount.
    Create three Instances(three customers) of BankAccount with all necessary details.
    Print the name of customers and their account balances.
    Calculate the average account balance from all the instances.

 */

const BankAccount = (name,accountNumber,accountBalance,accountType,ifsc) => {
  const getName = () => name;
  const getAccountBalance = () => accountBalance;
  const getIfsc = () => ifsc;
  const getAccountInfo = () => `Name: ${name} with account-number ${accountNumber} has account-type of ${accountType} having balance ${getAccountBalance()}`;
  return {getName,getAccountBalance,getIfsc,getAccountInfo}
};

const cust1 = BankAccount('Arun',109904,1000,'savings','AUTOSLK000434');
const cust2 = BankAccount('Vishwa',109913,2000,'savings',"AUTOSLK000444");
const cust3 = BankAccount('KSV',109906,3000,'crredit',"AUTOSLK000440");

console.log(cust1.getAccountInfo());
console.log(cust2.getAccountInfo());
console.log(cust3.getAccountInfo());

console.log(`Average account balance: ${ (( cust1.getAccountBalance() + cust2.getAccountBalance() + cust3.getAccountBalance() ) / 3).toFixed(2)}`);