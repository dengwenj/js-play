/**
 * 什么是函数
 *  实现特定功能的封装体
 *  只有函数是可以执行的，其他类型的数据不能执行
 * 
 * 为什么要用函数：提高代码复用
 * 
 * 如何定义函数
 *  1 函数声明
 *  2 表达式
 * 
 * 如何调用函数
 *  foo() 直接调用
 *  obj.foo() 通过对象调用
 *  new foo() new 调用
 *  foo.call()/ foo.apply(obj) 临时让 foo 成为 obj 的方法进行调用
 */
function foo() {
  console.log('foo')
}
foo()
foo()

const foo2 = function () {
  console.log('foo2')
}

const obj = {}
function bar() {
  this.dwj = 'dengwj'
}
bar.call(obj) // 可以让一个函数成为指定任意对象的方法进行调用 -> obj.bar()
console.log(obj) // {dwj: 'dengwj'}

/**
 * 什么是回调函数
 *  自己定义的
 *  自己没有调用
 *  最终他执行了
 * 
 * 常见的回调函数
 *  dom 事件
 *  定时器
 *  ajax 请求
 *  等等
 */
setTimeout(() => {
  console.log('回调函数')
}, 1000)

/**
 * 匿名函数自调用
 *  作用：不会污染全局命名空间, 用他来编写 js 模块
 */
(function () {
  var a = 1
  console.log('匿名函数自调用', a)
})()
