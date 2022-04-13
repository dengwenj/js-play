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

/**
 * 读取对象的属性值时：会自动到原型链中查找
 * 设置对象的属性值时：不会查找原型链，如果当前对象中没有此属性，直接添加此属性并设置其值
 * 方法一般定义在原型中，属性一般在实例对象自身上
 * 
 * 实例对象的隐式原型的值等于构造函数的显式原型的值
 */
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.say = function () {
  console.log('say')
}
const p1 = new Person('dwj', 22)
const p2 = new Person('ww', 17)
p2.say = 'say'
console.log(p1.say) // 还是那个函数
console.log(p2) // Person {name: 'ww', age: 17, say: 'say'}
