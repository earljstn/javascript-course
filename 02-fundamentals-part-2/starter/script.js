// // // console.log("Part 2: Functions ready!");

// // // // Functions - Declarations and Expressions

// // // console.log("=== FUNCTIONS ===");
// // // function logger() {
// // //     console.log("My name is Jonas");
// // // }

// // // logger();
// // // logger();
// // // logger();


// // // function fruitProcessor(apples, oranges) {
// // //   console.log(apples, oranges);
// // //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // //   return juice;
// // // }

// // // const appleJuice = fruitProcessor(5, 0);
// // // console.log(appleJuice);

// // // const appleOrangeJuice = fruitProcessor(2, 4);
// // // console.log(appleOrangeJuice);

// // // function greetStudent(studentName) {
// // //   const greetStudent = `Hello ${studentName}, welcome to JavaScript!`;
// // //   return greetStudent;
// // // }

// // // console.log(greetStudent("Earl"));

// // // // Function Expressions

// // // const calcAge = function (birthYear) {
// // //   return 2037 - birthYear;
// // // };

// // // const age1 = calcAge(1991);
// // // console.log(age1);

// // // function calcMyAge(birthYear, currentYear) {
  
// // //   const age = currentYear - birthYear;
// // //   return age;
// // // }

// // // const myAge = calcMyAge(1991, 2037); 
// // // const herAge = calcMyAge(2005, 2037);

// // // console.log(`I am ${myAge} years old`);
// // // console.log(`She is ${herAge} years old`);


// // // function introduce(firstName, lastName, age) {
// // //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// // //   return introduction;
// // // }

// // // console.log(introduce("Earl", "De Leon", 21));
// // // console.log(introduce("Nicole", "Fajardo", 20));


// // // // Return Values and Scope

// // // function calcMeAge(birthYear) {
// // //   return 2037 - birthYear;
// // // }

// // // function yearsUntilRetirement(birthYear, firstName) {
// // //   const age = calcMeAge(birthYear); 
// // //   const retirement = 65 - age;

// // //   if (retirement > 0) {
// // //     return `${firstName} retires in ${retirement} years`;
// // //   } else {
// // //     return `${firstName} has already retired!`;
// // //   }
// // // }
// // // console.log(yearsUntilRetirement(2004, "Earl"));

// // // // Global scope

// // // const globalVar = "I am global";

// // // function testScope() {

// // //  // Function scope

// // //   const localVar = "I am local";
// // //   console.log(globalVar);
// // //   console.log(localVar);
// // // }

// // // testScope();
// // // console.log(globalVar);

// // // // Coding Challenge #1: Function Calculator

// // // function calcAverage(score1, score2, score3) {
// // //   return (score1 + score2 + score3) / 3;
// // // }

// // // function checkWinner(avgDolphins, avgKoalas) {
// // //   if (avgDolphins >= 2 * avgKoalas) {
// // //     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// // //   } else if (avgKoalas >= 2 * avgDolphins) {
// // //     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// // //   } else {
// // //     return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
// // //   }
// // // }

// // // let scoreDolphins = calcAverage(44, 23, 71);
// // // let scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // scoreDolphins = calcAverage(85, 54, 41);
// // // scoreKoalas = calcAverage(23, 34, 27);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));


// // // // JavaScript Fundamentals Part 2 - Hour 1

// // // JavaScript Fundamentals Part 2 - Hour 2

// // const grades = [85, 92, 78, 96, 88];
// // console.log(grades);

// // // Arrays - Creation and Access
// // console.log("=== ARRAYS ===");

// // const friends = ["Michael", "Steven", "Peter"];
// // console.log(friends);

// // const mixed = ["Jonas", 27, true, friends];
// // console.log(mixed);

// // const years = new Array(1991, 1984, 2008, 2020);
// // console.log(years);

// // console.log(friends[0])
// // console.log(friends[1]);
// // console.log(friends[2]);

// // console.log(friends.length);

// // console.log(friends[friends.length - 1]);

// // friends[0] = "Jay";
// // console.log(friends);

// // const firstName = "Jonas";
// // const jonas = [firstName, "Schmedtmann", 2037 - 1991];
// // console.log(jonas);

// // const calcAge = function (birthYear) {
// //   return 2004 - birthYear;
// // };

// // const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// // console.log(ages);

// // // Array Methods - Adding Elements
// // const friend = ["Michael", "Steven", "Peter"];

// // const newLength = friend.push("Jay");
// // console.log(friend);
// // console.log(newLength);

// // friend.unshift("John");
// // console.log(friend);

// // const popped = friends.pop();
// // console.log(popped);    
// // console.log(friends);


// // const shifted = friends.shift();
// // console.log(shifted);
// // console.log(friends);

// // console.log(friends.indexOf("Steven"));
// // console.log(friends.indexOf("Bob"));

// // console.log(friends.includes("Steven"));
// // console.log(friends.includes("Bob"));


// // // Array Iteration - Loops
// // const friendS = ["Michael", "Steven", "Peter"];

// // for (let i = 0; i < friendS.length; i++) {
// //   console.log(friendS[i]);
// // }

// // const yearS = [1991, 2007, 1969, 2020];
// // const ageS = [];

// // for (let i = 0; i < years.length; i++) {
// //   ages.push(2004 - years[i]);
// // }
// // console.log(ages);

// // friends.forEach(function (friend, index) {
// //   console.log(`${index}: ${friend}`);
// // });

// // friends.forEach((friend, index) => {
// //   console.log(`Friend ${index + 1}: ${friend}`);
// // });


// // const graded = [85, 92, 78, 96, 88, 74];
// // let total = 0;

// // for (let i = 0; i < grades.length; i++) {
// //   total += grades[i];
// // }
// // const average = total / grades.length;
// // console.log(`Average grade: ${average.toFixed(2)}`);

// // let passedCount = 0;
// // grades.forEach((grade) => {
// //   if (grade >= 70) passedCount++;
// // });
// // console.log(`${passedCount} out of ${grades.length} students passed`);


// // // Coding Challenge #2 - Student Grade Manager

// // const studentScores = [78, 85, 92, 67, 88, 95, 73, 82];

// // function calculateAverage(scores) {
// //   let sum = 0;
// //   for (let i = 0; i < scores.length; i++) {
// //     sum += scores[i];
// //   }
// //   return sum / scores.length;
// // }


// // function findHighestGrade(scores) {
// //   let highest = scores[0];
// //   for (let i = 1; i < scores.length; i++) {
// //     if (scores[i] > highest) {
// //       highest = scores[i];
// //     }
// //   }
// //   return highest;
// // }

// // function findLowestGrade(scores) {
// //   let lowest = scores[0];
// //   for (let i = 1; i < scores.length; i++) {
// //     if (scores[i] < lowest) {
// //       lowest = scores[i];
// //     }
// //   }
// //   return lowest;
// // }

// // function countPassing(scores, passingScore) {
// //   let count = 0;
// //   for (let i = 0; i < scores.length; i++) {
// //     if (scores[i] >= passingScore) {
// //       count++;
// //     }
// //   }
// //   return count;
// // }


// // const avgScore = calculateAverage(studentScores);
// // const highest = findHighestGrade(studentScores);
// // const lowest = findLowestGrade(studentScores);
// // const passing = countPassing(studentScores, 70);

// // console.log("=== GRADE REPORT ===");
// // console.log(`Average: ${avgScore}`);
// // console.log(`Highest: ${highest}`);
// // console.log(`Lowest: ${lowest}`);
// // console.log(`Passing students: ${passing} out of ${studentScores.length}`);



// // // JavaScript Fundamentals Part 2 - Hour 2



// // The Array Problem

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// console.log(jonasArray[0]); 
// console.log(jonasArray[1]); 
// console.log(jonasArray[2]);
// console.log(jonasArray[3]); 
// console.log(jonasArray[4]);

// console.log("=== OBJECTS ===");

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);


// const earlObject = {
//   firstName: "Earl",
//   lastName: "Baccay",
//   age: 2025-2004,
//   job: "student",
//   friends: ["Michael", "Peter", "Steven"],
// };
//  console.log(
//     `${earlObject.firstName} is a ${earlObject.age}-year-old ${earlObject.job}.`
//  )


//  // Property Access Methods

//  // Dot notation - clean and readable
// console.log(earlObject.firstName);
// console.log(earlObject.lastName);
// console.log(earlObject.age);
// console.log(earlObject.job);
// console.log(earlObject.friends);

// // Bracket notation - uses strings
// console.log(earlObject["firstName"]);
// console.log(earlObject["lastName"]);
// console.log(earlObject["age"]);

// // Bracket notation with expressions 
// const nameKey = "Name";
// console.log(earlObject["first" + nameKey]);
// console.log(earlObject["last" + nameKey]);

// // Modifying Existing Properties

// earlObject.job = "programmer";
// earlObject["age"] = 20;
// console.log(earlObject);

// earlObject.location = "Philippines";
// earlObject["instagram"] = "@earljustineb";
// earlObject.hasDriversLicense = true;
// console.log(earlObject);


// const book = {
//   title: "The Night is Still Young",
//   author: "Shiki Ichinose",
//   pages: 208,
//   isRead: false
// };

// const playlist = {
//   name: "My Playlist",
//   creator: "Earl",
//   songs: ["ack", "boom boom", "wdym"],
//   duration: "30 minutes",
//   genre: "rnb"
// };

// console.log(book.title);
// console.log(book.author);
// console.log(book.pages);
// console.log(playlist["name"]);
// console.log(playlist.songs);
// console.log(playlist.duration);
// console.log(playlist.genre);
// console.log(playlist["creator"]);

// // Objects vs Arrays: When to Use What

// // Ordered, indexed data - think lists
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// const person = {
//   name: "Jonas",
//   age: 46,
//   occupation: "teacher",
// };

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };

// // Objects can contain arrays, arrays can contain objects
// const student = {
//   name: "Sarah",
//   grades: [85, 92, 78], 
//   address: {
    
//     street: "123 Main St",
//     city: "New York",
//   },
// };

// console.log(student.name);
// console.log(student.grades[0]);
// console.log(student.address.street);
// console.log(student.address.city);

// // Object Methods and the 'this' Keyword

// const earl = {
//   firstName: "Earl",
//   lastName: "Baccay",
//   birthYear: 2004,
//   job: "student",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };
// console.log(earl.calcAge(earl.birthYear));

// const earlImproved = {
//   firstName: "Earl",
//   lastName: "Baccay",
//   birthYear: 2004,
//   job: "student",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     console.log(this); 
//     return 2025 - this.birthYear;
//   },
// };

// console.log(earlImproved.calcAge());

// const earlAdvanced = {
//   firstName: "Earl",
//   lastName: "Baccay",
//   birthYear: 2004,
//   job: "student",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: false,

//   calcAge: function () {
//     this.age = 2025 - this.birthYear; 
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(earlAdvanced.calcAge());
// console.log(earlAdvanced.age);
// console.log(earlAdvanced.getSummary());

// // Coding Challenge #3 - User Profile System

// const user = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   birthYear: 1995,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],
//   isActive: true,

//   calcAge: function () {
//     const currentYear = new Date().getFullYear();
//     this.age = currentYear - this.birthYear;
//     return this.age;
//   }, 

//   addFriend: function (name, status = "active") {
//     this.friends.push({ name, status });
//     return this.friends.length;
//   },

//   getActiveFriends: function () {
//     const activeFriends = this.friends.filter(friend => friend.status === "active").length;
//     return activeFriends.length;
//   },

//   getInactiveFriends: function () {
//     const inactiveFriends = this.friends.filter(friend => friend.status === "inactive").length;
//     return inactiveFriends.length;
//   },

//   toggleStatus: function () {
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   getSummary: function () {
//     const age = this.calcAge();
//     const fullName = `${this.firstName} ${this.lastName}`;
//     const status = this.isActive ? "active" : "away";
//     const totalFriends = this.friends.length;
//     const activeFriends = this.getActiveFriends();
//     const inactiveFriends = this.getInactiveFriends();
//     const interests = this.interests.join(", ");

//     return `
// Name: ${fullName}
// Age: ${age}
// Location: ${this.location}
// Status: ${status}
// Friends: ${totalFriends} (Active: ${activeFriends}, Inactive: ${inactiveFriends})
// Interests: ${interests}`
//   },
// };

// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

// // JavaScript Fundamentals Part 2 - Hour 3

// JavaScript Fundamentals Part 2 - Hour 4

// Selecting DOM Elements
// querySelector - works with any CSS selector

// const message = document.querySelector(".message");
// console.log(message);

// const button = document.querySelector("#btn");
// console.log(button);

// const heading = document.querySelector("h1");
// console.log(heading);

// const input = document.querySelector(".guess");
// console.log(input);

// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContent);

// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button);

// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs); 
// console.log(allParagraphs[0]); 
// console.log(allParagraphs.length);

const message = document.querySelector(".message");

console.log(message.textContent); 
message.textContent = "Hello from JavaScript!";
console.log(message.textContent); 

message.innerHTML = "<strong>Bold text from JS!</strong>";
console.log(message.innerText);

// Input elements use .value property, not textContent

const input = document.querySelector(".guess");

console.log(input.value);
input.value = "Default text"; 
input.placeholder = "Type here";

const heading = document.querySelector("h1");

heading.style.color = "red";
heading.style.backgroundColor = "yellow"; 
heading.style.fontSize = "3rem";
heading.style.padding = "20px";
heading.style.borderRadius = "10px";

const button = document.querySelector("#btn");
button.style.padding = "20px";
button.style.borderRadius = "10px";

// Event Listeners and User Interaction

button.addEventListener("click", function () {
  console.log("Button was clicked!");
  message.textContent = "You clicked the button!";
  message.style.color = "green";
});

let clickCount = 0;
button.addEventListener("click", function () {
  clickCount++;
  button.textContent = `Clicked ${clickCount} times`;
  button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
});

const display = document.querySelector(".message");

input.addEventListener("input", function () {
  const userText = input.value;
  display.textContent = `You typed: ${userText}`;
  display.style.fontSize = `${userText.length + 10}px`;
});

input.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);

  if (event.key === "Enter") {
    display.textContent = `You pressed Enter! Text was: ${input.value}`;
    input.value = "";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    display.textContent = "Reset with Escape key!";
    input.value = "";
    clickCount = 0;
  }
});

// JavaScript Fundamentals Part 2 - Hour 4