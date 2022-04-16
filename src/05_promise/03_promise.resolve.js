/**
 * 如果传入的参数为非 Promise 类型的对象，则返回的结果为成功的 promise 对象，值为传入的值
 * 如果传入的参数为 promise 对象，则返回的结果取决于这个 promise 对象里面的状态和值
 */

const p1 = Promise.resolve('dengwj')
p1.then((res) => {
  console.log(res) // dengwj
})

const p2 = Promise.resolve(new Promise((resolve, reject) => {
  reject('失败')
}))
p2.catch((reason) => {
  console.log(reason)
})
