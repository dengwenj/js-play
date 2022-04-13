/**
 * 函数的 prototype 属性
 *  每个函数都有一个 prototype 属性，默认指向一个 Object 空对象(称为：原型对象，没有我们自定义的属性)
 *  原型对象中有一个属性 constructor，指向函数对象
 * 
 * 给原型对象添加方法：添加过后每个实例上面都拥有这个方法
 */
console.log(Date.prototype)

function Person() {
  
}
// 每个函数都有一个 prototype 属性，默认指向一个 Object 空对象
console.log(Person.prototype)

// 原型对象中有一个属性 constructor，指向函数对象
console.log(Person.prototype.constructor === Person) // true

// 给原型对象添加方法：添加过后每个实例上面都拥有这个方法
Person.prototype.foo = function () {
  console.log('给原型上添加方法，供实例去使用')
}
const p = new Person()
p.foo()
