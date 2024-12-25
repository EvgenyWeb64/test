'use strict';

// function checkAge(age) {
// 	if (age > 18) {
// 		return true;
// 	} else {
// 		return confirm('Родители разрешили?');
// 	}
// }

// function checkAge(age) {
// 	return (age > 18) ? true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
// 	return (age > 18) || confirm('Родители разрешили?');
// }

// function min(a,b){
// 	if (a<b){
// 		return a;
// 	} else {
// 		return b;
// 	}
// }

// function pow(x, n) {
// 	let result = x;

// 	for (let i = 1; i < n; i++) {
// 		result *= x;
// 	}

// 	return result;
// }

// let x = +prompt('Введите число', '');
// let n = +prompt('Введите степень числа', '');

// if (n >= 1 && n % 1 == 0) {
// 	alert(pow(x, n));
// } else {
// 	alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// }

// pow();

// function ask(question, yes, no) {
// 	if (confirm(question)) yes()
// 	else no();
// }

// let ask = (question, yes, no) => {
// 	if (confirm(question)) {
// 		yes();
// 	} else {
// 		no();
// 	}
// }

// ask(
// 	"Вы согласны?",
// 	() => alert("Вы согласились."),
// 	() => alert("Вы отменили выполнение.")
// );

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// function isEmpty(obj) {
// 	for (let key in obj) {
// 		// если тело цикла начнет выполняться - значит в объекте есть свойства
// 		return false;
// 	}
// 	return true;
// }

// let schedule = {};
// schedule["8:30"] = "get up";

// alert(isEmpty(schedule));

// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130
// };

// let sum = 0;
// for (let key in salaries) {
// 	sum += salaries[key];
// }

// alert(sum);

// let menu = {
// 	width: 200,
// 	height: 300,
// 	title: "My menu"
// };

// function multiplyNumeric(obj) {
// 	for (let key in obj) {
// 		if (typeof obj[key] === 'number') {
// 			obj[key] = obj[key] * 2;
// 		}
// 	}
// }

// console.log(menu);

// multiplyNumeric(menu);

// console.log(menu);

// const getHiddenCard = (card, count = 4) => {
// 	let result = '*'.repeat(count) + card.slice(12, 16);
// 	return result;
// }

// console.log(getHiddenCard('1234567812345678'));

// const name = 'daenerys';

// const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

// console.log(capitalize(name));

// const isLeapYear = (year) => {
// 	return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
// }

// console.log(isLeapYear(2016));

// const reverse = (s) => s.split('').reverse().join('');

// const isPalindrome = (word) => {
// 	let palindrome = reverse(word);
// 	return palindrome === word;
// }

// const isNotPalindrome = (word) => !isPalindrome(word);

// console.log(isPalindrome('мама'));

// const name = 'Hexlet';

// const getLetter = (text, position) => text[position - 1] || '';

// console.log(getLetter(name, 7));

// const convertText = (text) => {
// 	if (text === '') {
// 		return '';
// 	} else if (text[0] === text[0].toUpperCase()) {
// 		return text;
// 	} else {
// 		return reverse(text);
// 	}
// }

// // const convertText = (text) => (text[0] === text[0].toUpperCase() ? text : reverse(text)) || '';

// console.log(convertText(''));