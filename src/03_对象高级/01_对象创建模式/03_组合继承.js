function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.say = function () {
  console.log('say')
}

function Dwj(name, age, sex) {
  Person.call(this, name, age)
  this.sex = sex
}
Dwj.prototype = Object.create(Person.prototype)
Dwj.prototype.constructor = Dwj
Dwj.prototype.hh = function () {
  console.log('hh')
}

const dwj = new Dwj('dengwj', 22, '男')
console.log(dwj)
