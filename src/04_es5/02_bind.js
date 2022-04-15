const obj = {
  name: 'dwj',
  age: 22
}

function foo() {
  console.log(this) // obj
}
// bind 改变 this 的指向，不会调用这个函数，把这个函数返回
// 当要为回调函数绑定 this 只能用 bind
const foo2 = foo.bind(obj)
foo2()
