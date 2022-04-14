/**
 * 查找变量时就是沿着作用域链来查找的
 * 多个上下级关系的作用域形成的链，他的方向是从下向上的
 * 依次查找，就是在它的执行上下文对象里面
 */
var a = 1
var b = 2
function foo() {
  var c = 3
  console.log(a) // 1
  function foo2() {
    console.log(b) // 2 
    console.log(c) // 3
    console.log(d) // d is not defined
  }
  foo2()
}
foo()
