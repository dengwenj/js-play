const foo = () => (new Promise((resolve, reject) => {
  console.log(3)
  let p = new Promise((resolve, reject) => {
    console.log(7)
    setTimeout(() => {
      console.log(5)
      resolve(6)
    }, 0)
    resolve(1)
  })
  resolve(2)
  p.then((res) => {
    console.log(res)
  })
}))

foo().then((res) => {
  console.log(res)
})
console.log(4)
