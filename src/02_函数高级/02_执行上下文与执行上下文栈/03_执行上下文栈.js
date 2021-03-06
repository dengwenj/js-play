/**
 * 在全局代码执行前，JS 引擎就会创建一个栈来存储管理所有的执行上下文对象
 * 在全局执行上下文确定后，将其添加到栈中（压栈）
 * 在当前函数执行完后，将栈顶的对象移除（出栈）
 * 当所有的代码执行完后，栈中只剩下全局执行上下文
 */
var a = 1

function foo() {
  console.log('foo')
  bar()
}

function bar() {
  console.log('bar')
}

// 在调用函数，准备执行函数体之前，创建对应的函数执行上下文对象放入栈中
foo()
