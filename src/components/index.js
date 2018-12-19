function Person(name, age) {
	this.name = name;
	this.age = age;

	this.greet = function greet() {
		console.log(`Hi! my name is ${this.name}`);
	}
	
	this.greet = this.greet.bind(this);
}

let pedro = new Person('Pedro', 23);

let greet = pedro.greet;

greet.call({name: "Jane"});



