/**
 * 分类
 *  全局作用域、局部作用域
 * 在定义的时候就确定了
 * 
 * 作用：隔离变量，不同作用域下同名变量不会有冲突
 */
var a = 1 // 全局作用域

function foo() { // 函数作用域
  var a = 'foo'
  console.log(a) // foo
}
foo()
