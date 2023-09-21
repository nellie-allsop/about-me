`use strict`;
let myName = prompt("Hi there friend, what's your name?");
message = "Hi there " + myName + "👋";

alert(message);

function startQuiz() {
  let userPoints = 0;

  let firstQuestion = prompt(
    "Ok, I'm going to be quizzing you about me today! Please answer yes or no to each of the following statements. Firstly: My middle name is Grace"
  );

  if (
    firstQuestion.toLowerCase() === "yes" ||
    firstQuestion.toLowerCase() === "y"
  ) {
    message = "Incorrect! ❌";
  } else if (
    firstQuestion.toLowerCase() === "no" ||
    firstQuestion.toLowerCase() === "n"
  ) {
    message = "Correct! ✅";
    userPoints++;
  } else {
    message = "That is not a valid response";
  }

  // console.log(message);
  alert(message);

  let secondQuestion = prompt("I used to have a guinea pig called Derek");

  if (
    secondQuestion.toLowerCase() === "yes" ||
    secondQuestion.toLowerCase() === "y"
  ) {
    message = "Correct! ✅";
    userPoints++;
  } else if (
    secondQuestion.toLowerCase() === "no" ||
    secondQuestion.toLowerCase() === "n"
  ) {
    message = "Incorrect! ❌";
  } else {
    message = "That is not a valid response";
  }

  // console.log(message);
  alert(message);

  let thirdQuestion = prompt("I have travelled to America");

  if (
    thirdQuestion.toLowerCase() === "yes" ||
    thirdQuestion.toLowerCase() === "y"
  ) {
    message = "Incorrect! ❌";
  } else if (
    thirdQuestion.toLowerCase() === "no" ||
    thirdQuestion.toLowerCase() === "n"
  ) {
    message = "Correct! ✅";
    userPoints++;
  } else {
    message = "That is not a valid response";
  }

  // console.log(message);
  alert(message);

  let fourthQuestion = prompt("I hate minestrone soup");

  if (
    fourthQuestion.toLowerCase() === "yes" ||
    fourthQuestion.toLowerCase() === "y"
  ) {
    message = "Correct! ✅";
    userPoints++;
  } else if (
    fourthQuestion.toLowerCase() === "no" ||
    fourthQuestion.toLowerCase() === "n"
  ) {
    message = "Incorrect! ❌";
  } else {
    message = "That is not a valid response";
  }

  // console.log(message);
  alert(message);

  let fifthQuestion = prompt("I have two siblings");

  if (
    fifthQuestion.toLowerCase() === "yes" ||
    fifthQuestion.toLowerCase() === "y"
  ) {
    message = "Incorrect! ❌";
  } else if (
    fifthQuestion.toLowerCase() === "no" ||
    fifthQuestion.toLowerCase() === "n"
  ) {
    message = "Correct! ✅";
    userPoints++;
  } else {
    message = "That is not a valid response";
  }

  // console.log(message);
  alert(message);

  let answer = 6;
  let sixthQuestion = prompt(
    "Next up, can you guess how many pet guinea pigs I've had across my lifetime? Choose a number between 1 and 10"
  );

  if (sixthQuestion <= 5) {
    let mess = "That's too low!";
  } else if (sixthQuestion >= 7) {
    mess = "That's too high!";
  } else {
    mess = "That's correct!";
    userPoints++;
  }
  // console.log(message);
  alert(mess);

  for (let i = 1; i <= 4; i++) {
    console.log(i);
  }

  let seventhQuestion = prompt(
    "And finally, I have three people in my family (other than me!) Can you guess any of their names?"
  ).toLowerCase();

  let family = ["Claire", "Simon", "Alfie"];

  for (let a = 0; a < family.length; a++) {
    if (seventhQuestion === family[a]) {
      alert("Yes well done");
      userPoints++;
    } else if (seventhQuestion !== family[a]) {
      alert("That's not correct.");
    }
  }

  alert(
    message +
      " And, that's the end of the quiz " +
      myName +
      " If you were interested, my family members are called Claire, Simon and Alfie. At the end of that quiz, you have " +
      userPoints +
      " out of 7 points"
  );
}

// For loop to limit four responses

// console.log(message);

// let userPoints = 0;

// alert("Welcome to my game");

// let user = prompt("What is your name?");

// while (!user) {
// 	user = prompt("You need to actually tell me");
// }

// if (user === "Bob") {
// 	alert("Ugh");
// }

// alert("Hello" + user + ". Would you like to play my game?");

// let favFoods = ["cake", "sandwiches", "juice"];

// let foodAns = prompt("Name one of Nellie's fav foods").toLowerCase();

// for (let i = 0; i < favFoods.length; i++) {
// 	if (foodAns === favFoods[i]) {
// 		alert("yes well done");
// 	}
// }

// if (foodAns === "juice") {
// 	alert("Yeah she likes juice");
// 	userPoints++;
// }

// alert("You got " + userPoints + "/1 questions correct");

// if(favFoods.index)f(foodAns) >= 0{
//   alert("You got it right");
//   userPoints++;
// }
