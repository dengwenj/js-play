var a = 1
function foo() {
  console.log(a) // 1
}
function bar(fn) {
  var a = 2
  fn()
}
bar(foo)

var fun = function () {
  console.log(fun) // 就是这个函数
}
fun()

var obj = {
  fn: function () {
    console.log(fn) // 报错 fn is not defined
  }
}
obj.fn()
