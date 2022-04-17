async function foo() {
  // 返回的结果和 then 中的回调一样
  throw '出错啦~'
  return 111
  return new Promise((resolve, rejct) => {
    setTimeout(() => {
      resolve('成功')
    }, 1000);
  })
}

const p = foo()
console.log(p)
