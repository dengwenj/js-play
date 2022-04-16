const p1 = new Promise((resolve, reject) => {
  resolve('p1')
})
const p2 = new Promise((resolve, reject) => {
  resolve('p2')
})
const p3 = new Promise((resolve, reject) => {
  // resolve('p3')
  reject('失败')
})

Promise.all([p1, p2, p3]).then((res) => {
  console.log(res)
}, (reason) => {
  console.log(reason)
})
