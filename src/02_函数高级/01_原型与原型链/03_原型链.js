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
