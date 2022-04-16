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

    executor(resolve, reject)
  }

  then(onResolved, onRejected) {

  }
}

const p = new DWJPromise((resolve, reject) => {
  resolve('成功')
})
console.log(p);

p.then((res) => {
  console.log(res)
}, (reason) => {
  console.log(reason)
})
