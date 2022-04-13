/**
 * 1 每个函数 function 都有一个 prototype，即显示原型属性
 * 2 每个实例对象都有一个 __proto__，即隐式原型属性
 * 3 对象的隐式原型的值为对应构造函数的显式原型的值
 * 4 函数的 prototype 属性在定义函数是自动添加的，默认值是一个空的 Object 对象
 * 5 对象的 __proto__ 属性在创建对象时自动添加的，默认值为构造函数的 prototype 属性值
 */
function Foo() {
  // 在定义函数的时候创建的： Foo.prototype = {}
}

// 创建对象的时候会添加: this.__proto__ = Foo.prototype
const foo = new Foo()
// 实例对象的隐式原型属性等于构造函数的显示原型属性
console.log(foo.__proto__ === Foo.prototype) // true

Foo.prototype.test = function () {
  console.log('test')
}
foo.test()
