class Parent {
	constructor() {

	}

	foo() {

	}

	static bar() {

	}
}

var parent = new Parent();
parent.foo();

Parent.bar();

class Child extends Parent {
	constructor() {
		super();
	}

	baz() {

	}
}

Child.bar();