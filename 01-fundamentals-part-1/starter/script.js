// // // // // // JavaScript Fundamentals - Part 1
// // // // // // We'll write our code here!

// // // // // let js = "amazing!";
// // // // // console.log(40 + 8 + 23 - 10);
// // // // // console.log(js);


// // // // // console.log("=== VARIABLES ===");

// // // // // let firstName = "Justine";
// // // // // console.log(firstName);

// // // // // let age = 25;
// // // // // age = 21; 
// // // // // console.log(age);


// // // // // const birthYear = 2004;
// // // // // console.log(birthYear);


// // // // // const PI = 3.1415;
// // // // // console.log(PI);

// // // // // var job = "programmer";
// // // // // job = "Developer";
// // // // // console.log(job)

// // // // // const country = "Japan";
// // // // // const language = "Japanese";
// // // // // console.log(country)
// // // // // console.log(language)

// // // // // console.log("=== DATA TYPES ===");

// // // // // let id = 20;
// // // // // console.log(id); 20
// // // // // console.log(typeof id);

// // // // // let lastName = "De Leon"; 
// // // // // console.log(lastName)
// // // // // console.log(typeof lastName)

// // // // // let javascriptIsFun = true;
// // // // // console.log(javascriptIsFun);
// // // // // console.log(typeof javascriptIsFun);

// // // // // let year = 2004;
// // // // // console.log(year); 
// // // // // console.log(typeof year);

// // // // // let dynamicVariable = 11;
// // // // // console.log(dynamicVariable, typeof dynamicVariable); 

// // // // // dynamicVariable = "Unorthodox"
// // // // // console.log(dynamicVariable, typeof dynamicVariable); 

// // // // // dynamicVariable = true;
// // // // // console.log(dynamicVariable, typeof dynamicVariable); 



// // // // console.log("=== MATH OPERATORS ===");

// // // // const now = 2025;
// // // // const ageJustine = now - 2004;
// // // // const ageSarah = now - 2003;
// // // // console.log(ageJustine, ageSarah);

// // // // console.log(ageJustine * 2, ageJustine / 10, 2 ** 3);

// // // // console.log("Math operations:");
// // // // console.log("Addition:", 10 + 11);
// // // // console.log("Subtraction:", 30 - 9);
// // // // console.log("Multiplication:", 3 * 7);
// // // // console.log("Division:", 42 / 2);
// // // // console.log("Exponentiation:", 21 ** 1);

// // // // const firstName = "Justine";
// // // // const lastName = "de Leon";
// // // // console.log(firstName + " " + lastName);

// // // // console.log("Hi " + "Girls" + "!");
// // // // console.log("I am " + 21 + " years old");

// // // // console.log("=== ASSIGNMENT OPERATORS ===");

// // // // let x = 10 + 11;
// // // // console.log("x starts as:", x);

// // // // x += 1; 
// // // // console.log("After x += 10:", x);

// // // // x *= 5;
// // // // console.log("After x *= 4:", x);

// // // // x /= 6; 
// // // // console.log("After x /= 2:", x);

// // // // x++; 
// // // // console.log("After x++:", x);

// // // // x--; 
// // // // x--; 
// // // // console.log("After x-- twice:", x);


// // // // console.log("=== COMPARISON OPERATORS ===");

// // // // console.log("Age comparison:");
// // // // console.log(ageJustine > ageSarah); 
// // // // console.log(ageSarah >= 22); 
// // // // console.log(ageJustine < 21); 

// // // // console.log("Number comparisons:");
// // // // console.log(25 > 20); 
// // // // console.log(15 < 16); 
// // // // console.log(18 >= 18); 
// // // // console.log(16 <= 15); 

// // // // const isFullAge = ageSarah >= 18;
// // // // console.log("Sarah is older:", isFullAge); 

// // // // const isJustineOlder = ageJustine > ageSarah;
// // // // console.log("Justine is older:", isJustineOlder); 

// // // // console.log("Complex comparison:");
// // // // console.log(now - 2025 > now - 2020);


// // // // console.log("=== OPERATOR PRECEDENCE ===");

// // // // const current = 2037;
// // // // const ageJonas = current - 1991;
// // // // const ageSara = current - 2018;

// // // // console.log(current - 2004 > current - 2025); 

// // // // let t, y;
// // // // x = y = 222 - 17 - 5;
// // // // console.log(x, y); 

// // // // const averageAge = (ageJonas + ageSara) / 2;
// // // // console.log(ageJonas, ageSara, averageAge); 

 

// // // console.log("=== BMI CALCULATOR ===");

// // // const massMark = 78;
// // // const heightMark = 1.69;
// // // const massJohn = 92;
// // // const heightJohn = 1.95;

// // // const MarkBMI = massMark / heightMark ** 2;
// // // console.log("Mark's BMI is: ", MarkBMI);

// // // const JohnBMI = massJohn / heightJohn ** 2;
// // // console.log("John's BMI is: ", JohnBMI);

// // // const markHigherBMI = MarkBMI >= JohnBMI;
// // // console.log("Is Mark's BMI higher than John? ", markHigherBMI);


// // // const firstName = "Jonas";
// // // const job = "teacher";
// // // const birthYear = 1991;
// // // const year = 2037;

// // // const jonas =
// // //   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// // // console.log(jonas);

// // // const jonNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// // // console.log(jonNew);

// // // console.log(`I'm ${2037 - 1991} years old`);
// // // console.log(`Math works: ${2 + 3} equals five`);
// // // console.log(`Comparisons too: ${5 > 3}`);

// // // console.log(`Just a regular string...`);

// // // const age = 15;

// // // if (age >= 18) {
// // //   console.log("Sarah can start driving license 🚗");
// // // } else {
// // //   const yearsLeft = 18 - age;
// // //   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// // // }

// // // const birth = 2012;

// // // let century;
// // // if (birthYear <= 2000) {
// // //   century = 20;
// // // } else {
// // //   century = 21;
// // // }
// // // console.log(century); 

// // // const score = 85;

// // // if (score >= 60) {
// // //   console.log(`You passed with ${score} points! 🎉`);
// // //   console.log("Congratulations!");
// // // } else {
// // //   const pointsNeeded = 60 - score;
// // //   console.log(`You failed. Need ${pointsNeeded} more points.`);
// // // }


// // // console.log(Boolean(0));
// // // console.log(Boolean(undefined));
// // // console.log(Boolean("Jonas"));
// // // console.log(Boolean({})); 
// // // console.log(Boolean(""));

// // // const money = 50;
// // // if (money) {
// // //   console.log("Don't spend it all ;)");
// // // } else {
// // //   console.log("You should get a job!");
// // // }

// // // let height = 0; 
// // // if (height) {
// // //   console.log("YAY! Height is defined");
// // // } else {
// // //   console.log("Height is UNDEFINED");
// // // }

// // // if (height !== undefined) {
// // //   console.log("Height is defined");
// // // }

// // // const massMark = 78;
// // // const heightMark = 1.69;
// // // const massJohn = 92;
// // // const heightJohn = 1.95;

// // // const BMIMark = massMark / heightMark ** 2;
// // // const BMIJohn = massJohn / heightJohn ** 2;
// // // console.log(`Mark's BMI is:${BMIMark}`)
// // // console.log(`John's BMI is:${BMIJohn}`)

// // // if (BMIMark > BMIJohn) {
// // //     console.log(`Mark's BMI: ${BMIMark} is higher than John's BMI: ${BMIJohn}`)
// // // } else {
// // //     console.log(`John's BMI: ${BMIJohn} is higher than Mark's BMI: ${BMIMark}`)
// // // }


// // JavaScript Fundamentals - Hour 4

// console.log("=== Type Conversion and Coercion ===");

// const inputYear = "2004";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 21); 

// console.log(Number("Jonas")); 
// console.log(typeof NaN); 

// console.log(String(21), 21); 
// console.log(typeof String(21)); 

// console.log("I am " + 21 + " years old");
// console.log("34" - "10" - 3); 
// console.log("42" / "2"); 
// console.log("11" * "2" - "1"); 

// let n = "2" + 2; 
// n = n - 1; 
// console.log(n);

// console.log(2 + 3 + 4 + "5"); 
// console.log("10" - "4" - "3" - 2 + "5"); 

// console.log("5" + 2);
// console.log("5" - 2);
// console.log("5" * 2);
// console.log("5" / 2);

// const userAge = "25"; 
// const userScore = 95; 

// const userAgeInNumber = Number(userAge);
// const userScoreInString = String(userScore);

// console.log(userAgeInNumber);
// console.log(userScoreInString)


// const num1 = Number("First number:");
// const num2 = Number("Second number:");
// const sum = Number(19) + Number(2); 
// console.log(`Sum: ${sum}`);

// console.log("=== Equality Operators: == vs. ===");

// const age = "21";
// if (age === 21) console.log("You just became an adult :D (strict)");
// if (age == 21) console.log("You just became an adult :D (loose)");

// console.log("21" === 21); 
// console.log("21" == 21); 
// console.log(21 === 21); 

// console.log("21" == 21); 
// console.log(21 == false); 
// console.log("21" == false); 
// console.log(null == undefined); 

// console.log("" == 21);
// console.log("   " == 21); 

// const favourite = Number("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }
// if (favourite !== 23) console.log("Why not 23?");

// console.log(5 === "5");
// console.log(5 == "5");
// console.log(true === 1);
// console.log(true == 1);
// console.log(false === 0);
// console.log(false == 0);

// const username = ("admin");
// const password = ("1234");

// if (username === "admin" && password === "1234") {
//   console.log("Welcome admin!");
// } else {
//   console.log("Access denied");
// }

// console.log("=== Logical Operators ===");

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const isTired = false; 
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const DriversAge = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((DriversAge >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// // Create a club entry system with these rules:
// // Entry allowed if: (age >= 21 AND hasID) OR isVIP

// const GrantedAge = 21; 
// const hasID = true; 
// const isVIP = false; 

// if ((GrantedAge >= 21 && hasID) || isVIP) {
//   console.log('Welcome to the club!');
// } else {
//   console.log('Sorry, you cannot enter');
// }

// // Create a weather advisor:
// const temperature = 25; 
// const isRaining = false;
// const isWindy = true;

// if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
//   console.log("Perfect day!");
// } else if (temperature >= 15 && temperature <= 35 && !isRaining) {
//   console.log("Good day!");
// } else {
//   console.log("Stay inside!");
// }

// const DrinkersAge = 21;

// const drink = DrinkersAge >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// let drink2;
// if (DrinkersAge >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💧";
// }
// console.log(drink2);
// console.log(`I like to drink ${DrinkersAge >= 18 ? "wine 🍷" : "water 💧"}`);

// const score = 97;
// const isLoggedIn = true;
// const isPremium = false;

// const status = score >= 60 ? "passed" : "failed";
// const message = isLoggedIn ? "Welcome back!" : "Please log in";
// const discount = isPremium ? 0.2 : 0.1;

// let grade;
// let bonus = false;

// if (score >= 90) {
//   console.log("Excellent!");
//   grade = "A";
//   bonus = true;
// } else if (score >= 80) {
//   console.log("Good job!");
//   grade = "B";
// }

// console.log("Status:", status);
// console.log("Message:", message);
// console.log("Discount:", discount);
// console.log("Grade:", grade);
// console.log("Bonus:", bonus);


// const loggedIn = true;
// const welcomeMessage = loggedIn ? "Welcome back!" : "Please sign in";

// const isItPremium = false;
// const price = isItPremium ? 100 * 0.8 : 100;

// console.log(welcomeMessage); 
// console.log("Price:", price); 

// const Dscore = 85;
// const weather = "sunny";
// const battery = "15%"

// console.log(Dscore >= 75 ? "Your score: 85 (Passed)" : "Your score: 85 (Failed)"); 
// console.log(weather === "sunny" ? "Weather is sunny (Great for outdoor activities)" : "Weather is not sunny (Stay inside)"); 
// console.log(battery === "15%" ? "Battery: 15% (Low battery warning)" : "Battery: 15% (Battery OK)");


// console.log("=== Coding Challenge #4 ===");

// const bill = 275;
// const bill2 = 40;
// const bill3 = 430;

// console.log("The bill:", bill);
// console.log("The bill2:", bill2);
// console.log("The bill3:", bill3);

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
// const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);
// console.log(`The bill2 was ${bill2}, the tip2 was ${tip2}, and the total value ${bill2 + tip2}.`);
// console.log(`The bill3 was ${bill3}, the tip3 was ${tip3}, and the total value ${bill3 + tip3}.`);

// // JavaScript Fundamentals - Hour 4
