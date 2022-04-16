const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功')
  }, 1000)
})

const p2 = Promise.resolve('p2')
const p3 = Promise.resolve('p3')

// 谁先返回就用谁的
Promise.race([p1, p2, p3]).then((res) => {
  console.log(res) // p2
})
