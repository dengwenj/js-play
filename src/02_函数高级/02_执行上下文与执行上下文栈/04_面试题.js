// 5 个执行上文下对象
// dwj1,undefined ww1,1 ww1,2 ww1,3 ww2,3 ww2,2, ww2,1 dwj2,1
console.log('dwj1', a)
var a = 1
foo(1)
function foo(a) {
  if (a === 4) return

  console.log('ww1', a)
  foo(a + 1)
  console.log('ww2', a)
}
console.log('dwj2', a)

// 由于函数声明和变量都会提升，如果函数与变量同名，那么只要在变量赋值前打印的都会是函数，在变量赋值之后打印都是变量的值。
function f() {}
var f
console.log(typeof f) // 'function'

var c = 1
function c(c) {
  console.log(c)
}
c() // 报错 c即1 is not a function
