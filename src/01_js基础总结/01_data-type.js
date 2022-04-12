// 分类
// 1 基本类型(值类型)
/**
 * string: 任意字符串
 * number：任意数字
 * boolean：true or false
 * undefined：undefined
 * null：null
 */

// 对象类型（引用类型）
/**
 * Object: 任意对象
 * Function：特殊的对象，可以执行
 * Array：特殊的对象，有数值下标，数据是有序的
 */

// 判断
// typeof: 可以判断 undefined、number、string、boolean、function
// instanceof: 判断对象的具体类型
// === 返回的布尔值

const dwj = {
  age: 22,
  hobby: ['不吃饭', '不睡觉', '当社会人'],
  foo: function () {
    console.log('我是foo')
  }
}

console.log(typeof dwj.age === 'number') // true
console.log(typeof dwj.foo === 'function') // true
console.log(dwj.hobby instanceof Array, dwj.hobby instanceof Object) // true true
console.log(dwj.foo instanceof Function, dwj.foo instanceof Object) // true true
