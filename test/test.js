const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe('App', function(){
	//check if the retrun from sayHello is 'hello'
	it('sayHello should return hello', function(){
		let result = sayHello();
		assert.equal(result, 'hello');
	});
	
	//check if the retrun from sayHello is string
	it('sayHello should return type string', function(){
		let result = sayHello();
		assert.typeOf(result, 'string');
	});
	
	//check if the retrun from addNumbers is bigger than 5
	it('addNumbers should be above 5', function(){
		let result = addNumbers(2, 6);
		assert.isAbove(result, 5);
	});
	
	//check if the retrun from addNumbers is number
	it('addNumbers should be above 5', function(){
		let result = addNumbers(2, 1);
		assert.typeOf(result, 'number');
	});
});