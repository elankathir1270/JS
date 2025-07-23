// array destructure

let person = ["suriya", "srk", 33, "srk001", ["new york", "usa"]];

//[name, shortName, , id, [city, country]] = person;
/*if some element's data is no needed from array use ',' there
to get correct element value in order*/

//console.log(name, shortName, id, city);

// object destructure

let employee = {
  name: "suriya",
  age: 28,
  gender: "male",
  area: ["UK", "London"],
  workDetail: { exp: 5, company: "Google" },
};

const {
  name: fulName,
  gender,
  area: [country, city],
  workDetail: { exp, company },
} = employee;

console.log(fulName, gender, exp, company, country, city);

//Use case of spread operator

//copying array into another array
let arr1 = [10, 20, 30];

let newArray = ["a", "b", ...arr1];

console.log(newArray);

//passing elements of an array as arguments

function getArrayAsArg(num1, num2, num3) {
  return num1 + num2 + num3;
}

let sum = getArrayAsArg(...arr1);
console.log(sum);

//combine two or more array into single array

let ar1 = [10, 20, 30];
let ar2 = ["a", "b"];

let combineArr = [...ar1, ...ar2];

console.log(combineArr);

//extracting a string

console.log(..."Hello world");

//extracting a object

let obj = { a: 1, b: 2 };
let newObj = { ...obj, c: 3, d: 4, a: 10 }; // adding new variable and overriding new value to existing prop is possible
console.log(newObj);

//Use case of rest operator

const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest);

const obj1 = { a1: 1, b1: 2, c1: 3, d1: 4, e1: 5 };

const { a1, b1, ...restObj } = obj1;
console.log(a1, b1, restObj);

//Use case of rest parameter

function addNumbers(a, b, ...rest) {
  let sum = a + b;

  for (let i = 0; i < rest.length; i++) {
    sum += rest[i];
  }

  return sum;
}

console.log(addNumbers(10, 20));
console.log(addNumbers(10, 20, 30));
console.log(addNumbers(10, 20, 30, 40, 50));

//Enhanced Object literal syntax

const address = ["london", "UK"];
const contact = {
  email: "srk@gmail.com",
  phone: 9010999999,
};
const isMarried = true;

const user = {
  name: "srk",
  dob: "28/1/2001",
  gender: "male",
  address,
  contact, // when property and variable name is same we dont need to assign it explicitly
  isMarried,
  [5 + 5]: 5,
  [address[0]]: "Lon", // we can create dynamic property like this.
  calAge(year) {}, // we can directly assign method as property

  calAgee: function (year) {
    // existing way
    //function body
  },
};

console.log(user);

//SET Data structure

const arr = [1, 2, 3, 2, 4, 1, 5, 6, 3, 9];

// const arrSet = [...new Set(arr)];

// console.log(arrSet);

//check the element is present or not in the existing

const arrSet = new Set(arr);

console.log(arrSet.has(9));

const arrA = [1, 2, 3, 4];
const arrB = [3, 4, 5, 6];

//const uniqArr = [...new Set([...arrA, ...arrB])];

//console.log(uniqArr)

//find intersection

const filtered = arrA.filter((x) => {
  return new Set(arrB).has(x);
});

console.log("Intersection - " + filtered);

//find different

const different = arrA.filter((x) => {
  return !new Set(arrB).has(x);
});

console.log("different - " + different);

//Delete the element using Set

const afterDelete = new Set(arr).delete(3);

console.log("after Delete - " + afterDelete);

//looping over set

const mySet = new Set(["delhi", "mumbai", "Chennai", "bangalore"]);

for (let value of mySet) {
  console.log(value);
}

mySet.forEach((value, key, set) => {
  console.log(value, key, set);
});

//New Set method

const arrX = new Set([1, 2, 3, 4]);
const arrY = new Set([3, 4, 5, 6]);

const union = arrX.union(arrY);
console.log(union);

const intersectionNew = arrX.intersection(arrY);
console.log(intersectionNew);

const differenceNew = arrX.difference(arrY);
console.log(differenceNew);

// MAP Data structure

const myMap = new Map();

myMap
  .set("question", "In which year ES6 was released")
  .set(1, "2013")
  .set(2, "2014")
  .set(3, "2015")
  .set(4, "2016")
  .set("correct", 2015)
  .set(true, "correct answer")
  .set(false, "wrong answer");

function showQuestion() {
  const q = myMap.get("question");
  console.log(q);
  console.log("*****************");
  console.log("a. " + myMap.get(1));
  console.log("b. " + myMap.get(2));
  console.log("c. " + myMap.get(3));
  console.log("g. " + myMap.get(4));

  const ans = +prompt("please enter your answer");

  const isCorrect = ans === myMap.get("correct");

  const res = isCorrect ? myMap.get(true) : myMap.get(false);

  console.log(res);
}

//showQuestion();

//Create Map from array and object

const address1 = [
  ["city", "london"],
  ["country", "uk"],
  ["pin", "1234"],
  ["street", "xyz street"],
];

// array should be nested array(elements of array should be arrays)
// It takes first element as key second as value

const arrMap = new Map(address1);
console.log(arrMap);

const user1 = {
  name: "srk",
  age: 33,
  gender: "male",
};

const objArr = Object.entries(user1);
const objMap = new Map(objArr);
console.log(objMap);

//Map to array

const userMap = new Map();
userMap.set("name", "mark").set("age", 28).set("gender", "male");

console.log([...userMap]);
console.log([...userMap.keys()]);
console.log([...userMap.values()]);

//looping over maps

for (let element of address1) {
}

address1.forEach((value, key) => {
  console.log(key + ":" + value);
});
