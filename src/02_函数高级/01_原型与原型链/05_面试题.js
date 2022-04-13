// 1
function Foo() {}
Foo.prototype.name = 'ww'

var foo = new Foo()

Foo.prototype = {
  name: 'dwj',
  age: 22
}

var foo2 = new Foo()
console.log(foo.name, foo.age, foo2.name, foo2.age) // ww undefined dwj 22

// 2 
function Fun() {}
Object.prototype.a = function () {
  console.log('a')
}
Function.prototype.b = function () {
  console.log('b')
}

var fun = new Fun()
fun.a() // a
fun.b() // undefined is not a function
Fun.a() // a
Fun.b() // b