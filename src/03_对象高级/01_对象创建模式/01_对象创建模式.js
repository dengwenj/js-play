// 构造函数中一般只初始化
// 公用的放到原型上面，节省内存
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.say = function () {
  console.log('say')
}

const p1 = new Person('dwj', 22)
const p2 = new Person('ww', 17)
