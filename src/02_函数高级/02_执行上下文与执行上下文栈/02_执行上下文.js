// 1 代码分类
// 全局代码、局部代码

/**
 * 全局执行上下文
 *  在执行全局代码前将 window 确定为全局执行上下文
 *  对全局数据进行预处理
 *    var 定义的全局变量 -> undefined，添加为 window 的属性
 *    function 声明的全局函数 -> 赋值（function），添加为 window 的方法
 *    this -> 赋值为 window
 *  开始执行全局代码
 */

/**
 * 函数执行上下文
 *  在调用函数，准备执行函数体之前，创建对应的函数执行上下文对象（在栈中）
 *  对局部数据进行预处理
 *    形参变量 -> 赋值（实参）添加为执行上下文的属性
 *    arguments 赋值实参列表，添加为执行上下文的属性
 *    var 定义的局部变量 -> undefined, 添加为执行上下文的属性
 *    function 声明的函数 -> 赋值 function，添加为执行上下文的方法
 *    this -> 赋值（调用函数的对象）
 *  开始执行函数体代码
 */

console.log(dwj) // undefined
console.log(this) // window
foo()

var dwj = 'dengwj'
function foo() {
  console.log('foo')
}

function fun(w) {
  console.log(w) // ww
  console.log(ww) // undefined
  console.log(this) // window
  console.log(arguments) // ['ww', 'dwj']
  fun2()

  var ww = 'ww'
  function fun2() {
    console.log('fun2')
  }
}
fun('ww', 'dwj')
