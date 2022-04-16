const p1 = new Promise((resovle, reject) => {
  resovle('成功')
})

// 当返回一个空的 promise 对象就会中断 promise 链，因为状态为 pending 不会执行回调函数
p1.then((res) => {
  console.log(res)
  return new Promise(() => {})
}).then((res) => {
  console.log(222)
}).then((res) => {
  console.log(333)
}).catch((reason) => {
  console.log(reason)
})
