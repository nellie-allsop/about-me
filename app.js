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
	} else {
		message = "That is not a valid response";
	}

	// console.log(message);
	alert(message);

	let sixthQuestion = prompt(
		"Next up, can you guess how many pet guinea pigs I've had across my lifetime? Choose a number between 1 and 10"
	);

	if (sixthQuestion <= 5) {
		message = "That's too low!";
	} else if (sixthQuestion >= 7) {
		message = "That's too high!";
	} else {
		message = "That's correct!";
	}
	// console.log(message);
	alert(message);

	let seventhQuestion = prompt(
		"And finally, I have three people in my family (other than me!) Can you guess any of their names?"
	).toLowerCase();

	let family = ["Claire", "Simon", "Alfie"];

	for (let i = 0; i < family.length; i++) {
		if (seventhQuestion === family[i]) {
			alert("Yes well done");
			userPoints++;
		}
	}

	alert(
		message +
			" And, that's the end of the quiz " +
			myName +
			"If you were interested, my family members are Claire, Simon and Alfie. At the end of that quiz, you have " +
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
