// Destructuroin

var foo = {
	bar: 1,
	baz: 2
};

var { bar, baz } = foo;

console.log(bar);
console.log(baz);

// For array

var tenses = [ 'me', 'you', 'he', 'she'];

var [ FirstPerson, SecondPerson ] = tenses;

console.log(FirstPerson, SecondPerson);

// Destruction for first result
// Promise.all([promise1, promise2]).then(function([result1, result2]){

// });

// Easier to read
var foo = 2;
var obj = {
	bar: 1,
	foo,
	baz: 3
};
console.log(obj);