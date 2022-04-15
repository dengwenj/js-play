const obj = {
  name: 'dwj',
  age: 22
}

// 可以吧 obj2 的隐式原型修改为 obj 
const obj2 = Object.create(obj, {
  sex: {
    value: '男',
    writable: true, // 是否可以被修改
    configurable: true, // 是否可以被删除
    enumerable: true // 当前属性是否可以被枚举
  }
})
console.log(obj2)
