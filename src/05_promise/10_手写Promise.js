class DWJPromise {
  constructor(executor) {
    // 初始化状态
    this.promiseState = 'pending'
    this.promiseResult = null

    const resolve = (data) => {
      if (this.promiseState === 'pending') {
        this.promiseState = 'fulfilled'
        this.promiseResult = data
      }
      
    }

    const reject = (data) => {
      if (this.promiseState === 'pending') {
        this.promiseState = 'rejected'
        this.promiseResult = data
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onResolved, onRejected) {

  }
}

const p = new DWJPromise((resolve, reject) => {
  reject('失败')
  resolve('成功')
  
  // throw '错误'
})
console.log(p)

p.then((res) => {
  console.log(res)
}, (reason) => {
  console.log(reason)
})
