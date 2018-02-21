// Mutable
console.log('Mutable example:');
var a = { name: 'Fred' };
console.log('Var a:', a);

var b = a;
b.name = 'Ted';
console.log('Var a: ', a);
console.log('Var b: ', b);

// Immutable
console.log('Immutable example:');
var c = { name: 'Fred', age: 25 };
console.log('Var c: ', c);
var d = Object.assign({}, a, { age: 35 });
console.log('Var c: ', c);
console.log('Var d: ', d);