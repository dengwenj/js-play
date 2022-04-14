// var name1 = 'the window'
// var object3 = {
//   name1: 'my object',
//   getNameFunc() {
//     return function () {
//       return this.name1
//     }
//   }
// }
// console.log(object3.getNameFunc()()) // the window

// var name1 = 'the window'
// var object2 = {
//   name1: 'my object',
//   getNameFunc() {
//     var that = this
//     return function () {
//       return that.name1
//     }
//   }
// }
// console.log(object2.getNameFunc()()) // my object

function fun(n, o) {
  console.log(o)

  return {
    fun: function (m) {
      return fun(m, n)
    }
  }
}
// undefined 0 0 0
var a = fun(0)
a.fun(1)
a.fun(2)
a.fun(3)
// undefined 0 1 2
var b = fun(0).fun(1).fun(2).fun(3)
// undefined 0 1 1
var c = fun(0).fun(1)
c.fun(2)
c.fun(3)
