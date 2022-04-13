/**
 * 什么是对象？
 *  1 多个数据的封装体
 *  2 用来保存多个数据的容器
 *  3 有个对象代表现实中的一个事物
 * 
 * 为什么要用对象? 统一管理多个数据
 * 
 * 对象的组成
 *  1 属性：属性名（字符串）和属性值（任意数据类型）
 *  2 方法：一种特殊的属性（属性值是函数）
 * 
 * 访问对象的数据
 *  1 对象.属性名
 *  2 对象['属性名']
 */
const person = {
  name: 'dwj',
  age: 22,
  say() {
    console.log('say')
  }
}

/** 
 * 什么时候用['属性名']的方式
 *  1 属性名包含特殊字符：- 等
 *  2 属性名不确定 
 */
const obj = {}
obj['dwj-ww'] = 'dwjww'

const dwj = 'dengnwj'
const age = 22
obj[dwj] = dwj
obj[age] = age
console.log(obj)
