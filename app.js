let myName = prompt("Hi there friend, what's your name?");
message = "Hi there " + myName + "👋";

alert(message);

function startQuiz() {
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
	alert(message + " That is the end of the quiz " + myName);
}
