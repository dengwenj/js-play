/**
 * instanceof 是如何判断的?
 *  A instanceof B
 *  如果 B 函数的显式原型对象在 A 对象的原型链上，返回 true，反之
 */
console.log(Object instanceof Object) // true
console.log(Object instanceof Function) // true
console.log(Function instanceof Function) // true
console.log(Function instanceof Object) // true

function Fun() {

}
console.log(Object instanceof Fun) // false
