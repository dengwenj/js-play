/**
 * 原型链：
 * 访问一个对象的属性时：
 *  先在自身属性上查找，找打返回
 *  如果没有，再沿着 __proto__ 隐式原型属性查找，找到返回
 *  如果最终都没找到，返回 undefined
 * 
 * 别名：隐式原型链
 * 作用：查找对象的属性
 */

// 所有函数的 __proto__ 都是一样的
// 任何函数都是 new Function 产生的

function Fun() {
  this.foo = function () {
    console.log('foo')
  }
}
Fun.prototype.foo2 = function () {
  console.log('foo2')
}

const fun = new Fun()
fun.foo()
fun.foo2()
fun.toString()
fun.foo3

// 函数的显式原型指向的对象默认是空的 Object 实例对象（但 Object 构造函数不满足）
console.log(Fun.prototype instanceof Object) // true
console.log(Object.prototype instanceof Object) // false
console.log(Function.prototype instanceof Object) // true
console.log(Function instanceof Object) // true

// 所有函数都是 Function 的实例（包括 Function）
console.log(Function.__proto__ === Function.prototype) // true

// Object 的原型对象是原型链尽头
console.log(Object.prototype.__proto__) // null 
