const p1 = new Promise((resovle, reject) => {
  resovle('成功')
})

// 异常穿透，当前任何操作出了异常，都会传到最后失败的回调中
p1.then((res) => {
  console.log(res)
  throw '异常穿透'
}).then((res) => {
  console.log(222)
}).then((res) => {
  console.log(333)
}).catch((reason) => {
  console.log(reason)
})
