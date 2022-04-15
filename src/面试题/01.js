// 操作对象属性优先级高于普通的赋值操作
var a = { n: 1 }
var b = a
// 操作对象属性优先级高于普通的赋值操作
// 先赋值给 a.x 的，在赋值给 a 的  先{ n: 1, x: { n: 2 } } 在 { n: 2 }
a.x = a = { n: 2 }

console.log(a.n, b.n) // 2 1 
console.log(a.x, b.x) // undefined { n: 2 }
