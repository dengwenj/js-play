/**
 * this 是什么
 *  任何函数本质都是通过某个对象来调用的，如果没有直接指定就是 window
 *  所有函数内部都有一个变量 this
 *  它的值是调用函数的当前对象
 * 
 * 如何确定 this 的值
 *  foo(): window
 *  p.foo(): p
 *  new foo(): 新创建的对象
 *  foo.call(obj): obj
 */

function foo() {
  console.log(this)
}
foo()

function Person() {
  this.name = 'dengwj'
  this.say = function () {
    console.log('say')
  }
}
const p = new Person()

const obj = { age: 22 }
function bar() {
  console.log(this)
}
bar.call(obj)

const obj2 = {
  fn: function () {
    console.log(this)
  }
}
obj2.fn()
