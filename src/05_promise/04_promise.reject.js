const p1 = Promise.reject('一直返回的都是失败的 promise 对象,失败的结果是传入的这个值')
p1.catch((reason) => {
  console.log(reason)
})
 
// 他的值无论如何都是你的传参数
const p2 = Promise.reject(new Promise((resovle, reject) => {
  resovle('成功')
}))
p2.catch((reason) => {
  console.log(reason) // new 的这个 promise 对象
})
