'use strict';

let user = {
	name: 'Алексей',
	surname: 'Иванов',
	age: 31,
	adress: {
		city: 'Москва',
		street: 'Дзержинского',
	},
	programmer: true
}

console.log(Object.keys(user).length);