// 1 变量声明提升
// 通过 var 定义的变量，在定义语句之前就可以访问到
// 值：undefined

// 2 函数提升
// 通过 function 声明的函数，在之前就可以直接调用
// 值：函数定义

console.log(age) // undefined
var age = 22

foo()
function foo() {
  console.log('foo')
}
