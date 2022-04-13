// var a = xxx，a 内存中到底保存的是什么？
/**
 * xxx 是基本数据，保存的就是这个数据
 * xxx 是对象，保存的是对象的地址值
 * xxx 是一个变量，保存的 xxx 的内存内容（可能是基本数据，也可能是地址值）
 */
var person = {
  name: 'dwj',
  age: 22
}
var person2 = person
var a = 1
var b = {}

/**
 * 引用变量赋值的问题
 *  n 个引用变量指向同一个对象，通过一个变量修改对象内部数据，其他所有变量获取到的都是修改之后的数据
 *  2 个引用变量指向同一个对象，让其中一个引用变量指向另一个对象，另一个引用变量依然指向前一个对象
 */
var obj = {
  hh: 'ddd'
}
var obj2 = obj
obj.hh = 'hhh'
console.log(obj2.hh) // hhh

var obj3 = {
  name: 'tom'
}
var obj4 = obj3
obj3 = { name: 'kangkang' }
console.log(obj4.name) // tom
