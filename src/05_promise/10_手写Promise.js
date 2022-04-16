class DWJPromise {
  constructor(executor) {
    this.promiseState = 'pending'
    this.promiseResult = null

    const resolve = (data) => {
      this.promiseState = 'fulfilled'
      this.promiseResult = data
    }

    const reject = (data) => {
      this.promiseState = 'rejected'
      this.promiseResult = data
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
  // resolve('成功')
  throw '错误'
})
console.log(p)

p.then((res) => {
  console.log(res)
}, (reason) => {
  console.log(reason)
})
