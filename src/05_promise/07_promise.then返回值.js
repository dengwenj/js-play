const p1 = new Promise((resolve, reject) => {
  resolve('成')
})
 
/**
 * 如果抛出异常，新 promise 变为 rejected，reason 为抛出的异常
 * 如果返回的是非 promise 的任意值，新 promise 变为 resolve，value 为返回的值
 * 如果返回的是另一个新 promise，此 promise 的结果就会成为新 promise 的结果
 */
const p2 = p1.then((res) => {
  console.log(res)
  // throw '抛出的错误'
  // return 'ww'
  return new Promise((resolve, reject) => {
    resolve('成功')
  })
})
console.log(p2);
