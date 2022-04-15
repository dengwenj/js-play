// 关键的是
// 子类型的原型为父类型的一个实例对象
function Dwj() {
  this.name = 'dwj'
}
Dwj.prototype.say = function () {
  console.log('say')
}

function Ww() {
  this.name = 'ww'
}
// 子类型的原型为父类型的一个实例对象
Ww.prototype = new Dwj()
Ww.prototype.hh = function () {
  console.log('hh')
}

const ww = new Ww()
ww.say()
