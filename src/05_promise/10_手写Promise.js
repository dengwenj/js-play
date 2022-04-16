const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class DWJPromise {
  constructor(executor) {
    // 初始化状态
    this.promiseState = PENDING
    this.promiseResult = null

    const resolve = (data) => {
      if (this.promiseState === PENDING) {
        this.promiseState = FULFILLED
        this.promiseResult = data
      }
      
    }

    const reject = (data) => {
      if (this.promiseState === PENDING) {
        this.promiseState = REJECTED
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
    if (this.promiseState === FULFILLED) {
      onResolved(this.promiseResult)
    }

    if (this.promiseState === REJECTED) {
      onRejected(this.promiseResult)
    }
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
