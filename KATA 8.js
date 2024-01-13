// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// function zero() {}
// function one() {}
// function two() {}
// function three() {}
// function four() {}
// function five() {}
// function six() {}
// function seven() {}
// function eight() {}
// function nine() {}

// function plus() {}
// function minus() {}
// function times() {}
// function dividedBy() {}

let number2
let key
let operation = {
	'+': number1 => {
		key = undefined
		return number1 + number2
	},
	'-': number1 => {
		key = undefined
		return number1 - number2
	},
	'*': number1 => {
		key = undefined
		return number1 * number2
	},
	'/': number1 => {
		key = undefined
		return Math.floor(number1 / number2)
	},
}

function zero() {
	if (key == undefined) {
		number2 = 0
	} else {
		return operation[key](0)
	}
}
function one() {
	if (key == undefined) {
		number2 = 1
	} else {
		return operation[key](1)
	}
}
function two() {
	if (key == undefined) {
		number2 = 2
	} else {
		return operation[key](2)
	}
}
function three() {
	if (key == undefined) {
		number2 = 3
	} else {
		return operation[key](3)
	}
}
function four() {
	if (key == undefined) {
		number2 = 4
	} else {
		return operation[key](4)
	}
}
function five() {
	if (key == undefined) {
		number2 = 5
	} else {
		return operation[key](5)
	}
}
function six() {
	if (key == undefined) {
		number2 = 6
	} else {
		return operation[key](6)
	}
}
function seven() {
	if (key == undefined) {
		number2 = 7
	} else {
		return operation[key](7)
	}
}
function eight() {
	if (key == undefined) {
		number2 = 8
	} else {
		return operation[key](8)
	}
}
function nine() {
	if (key == undefined) {
		number2 = 9
	} else {
		return operation[key](9)
	}
}

function plus() {
	key = '+'
}
function minus() {
	key = '-'
}
function times() {
	key = '*'
}
function dividedBy() {
	key = '/'
}
