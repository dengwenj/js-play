/**
 * 闭包的生命周期：
 *  产生：在嵌套内部函数定义执行完时就产生了
 *  死亡：在嵌套的内部函数成为垃圾对象就死亡了
 */

function foo() {
  const a = 'dwj'

  return function () {
    console.log(a)
  } 
}
let bar = foo()
bar = null // 闭包死亡，包含闭包的函数对象成为了垃圾对象