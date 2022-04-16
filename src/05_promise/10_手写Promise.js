const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function handleResolveReject(onResolvedOrOnRejected, resolve, reject) {
  try {
    const res = onResolvedOrOnRejected(this.promiseResult)
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
  } catch (error) {
    reject(error)
  }
}

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
          item.resolved(data)
        })
      }
    }

    const reject = (data) => {
      if (this.promiseState === PENDING) {
        this.promiseState = REJECTED
        this.promiseResult = data

        this.callbackRR.forEach((item) => {
          item.rejected(data)
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
    if (typeof onRejected !== 'function') {
      // 实现异常穿透，就是加了个默认值
      onRejected = (reason) => {
        throw reason
      }
    }
    if (typeof onResolved !== 'function') {
      // 值传递，第一个可以不写
      // p.then().then((res) => { console.log(res) }, () => {})
      onResolved = res => res
    }

    return new DWJPromise((resolve, reject) => {
      if (this.promiseState === FULFILLED) {
        handleResolveReject.call(this, onResolved, resolve, reject)
      }

      if (this.promiseState === REJECTED) {
        handleResolveReject.call(this, onRejected, resolve, reject)
      }

      if (this.promiseState === PENDING) {
        // 保存回调函数
        this.callbackRR.push({
          resolved: () => {
            handleResolveReject.call(this, onResolved, resolve, reject)
          },
          rejected: () => {
            handleResolveReject.call(this, onRejected, resolve, reject)
          }
        })
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  static resolve(value) {
    return new DWJPromise((resolve, reject) => {
      if (value instanceof DWJPromise) {
        value.then((res) => {
          resolve(res)
        }, (reason) => {
          reject(reason)
        })
      } else {
        resolve(value)
      }
    })
  }

  static reject(value) {
    return new DWJPromise((resolve, reject) => {
      reject(value)
    })
  }
}

/**
 * 测试
 */
// const p = new DWJPromise((resolve, reject) => {
//   // setTimeout(() => {
//   //   resolve('成功1111')
//   // }, 1000)

//   reject('失败')
//   // resolve('成功')
  
//   // throw '错误'
// })
// console.log(p)

// const p1 = p.then((res) => {
//   console.log(res)
//   // return 111111111111
//   return new DWJPromise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('new promise')
//     }, 3000);
//   })
// })
// console.log(p1)

// p.catch((res) => {
//   console.log(res)
// })

const p3 = DWJPromise.resolve(new DWJPromise((resolve, reject) => {
  // reject('11111111')
  // resolve('0')
  setTimeout(() => {
    resolve('sss')
  }, 1000)
}))
console.log(p3);
// this.callbackRR = [] 写成数组都会调用，不会覆盖
// p.then((res) => {
//   console.log(res)
// }, (reason) => {
//   console.log(reason)
// })


// const ffff = new Promise((resolve, reject) => {
//   reject('时报')
// })

// const pppp = ffff.catch((rs) => {
//   console.log(rs)

// })
