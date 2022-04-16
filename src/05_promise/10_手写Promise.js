const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class DWJPromise {
  constructor(executor) {
    // 初始化状态
    this.promiseState = PENDING
    this.promiseResult = null
    this.callbackRR = []

    const resolve = (data) => {
      if (this.promiseState === PENDING) {
        this.promiseState = FULFILLED
        this.promiseResult = data

        this.callbackRR.forEach((item) => {
          item.onResolved(data)
        })
      }
    }

    const reject = (data) => {
      if (this.promiseState === PENDING) {
        this.promiseState = REJECTED
        this.promiseResult = data

        this.callbackRR.forEach((item) => {
          item.onRejected(data)
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onResolved, onRejected) {
    return new DWJPromise((resolve, reject) => {
      if (this.promiseState === FULFILLED) {
        const res = onResolved(this.promiseResult)
        if (res instanceof DWJPromise) {
          res.then((res) => {
            resolve(res)
          }, (reason) => {
            reject(reason)
          })
          // if (res.promiseState === FULFILLED) {
          //   resolve(res.promiseResult)
          // } else {
          //   reject(res.promiseResult)
          // }
        } else {
          resolve(res)
        }
      }

      if (this.promiseState === REJECTED) {
        const res = onRejected(this.promiseResult)
        if (res instanceof DWJPromise) {
          res.then((res) => {
            resolve(res)
          }, (reason) => {
            reject(reason)
          })
          // if (res.promiseState === FULFILLED) {
          //   resolve(res.promiseResult)
          // } else {
          //   reject(res.promiseResult)
          // }
        } else {
          resolve(res)
        }
      }

      if (this.promiseState === PENDING) {
        // 保存回调函数
        this.callbackRR.push({
          onResolved,
          onRejected
        })
      }
    })
  }
}

/**
 * 测试
 */
const p = new DWJPromise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve('成功1111')
  // }, 1000)

  // reject('失败')
  resolve('成功')
  
  // throw '错误'
})
console.log(p)

const p1 = p.then((res) => {
  console.log(res)
  throw 'ggg'
  return new DWJPromise((resolve, reject) => {
    resolve('new promise')
  })
}, (reason) => {
  console.log(reason)
  // return 222
  return new DWJPromise((resolve, reject) => {
    // resolve('resolve')
    reject('reject')
  })
})
console.log(p1)

// this.callbackRR = [] 写成数组都会调用，不会覆盖
// p.then((res) => {
//   console.log(res)
// }, (reason) => {
//   console.log(reason)
// })
