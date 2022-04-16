const person = {
  name: 'dwj',
  age: 22,
  sex: '男',
  hobby: ['不吃饭', '不睡觉', '当社会人']
}

function deepClone(target) {
  let cloneRes

  if (target instanceof Array) {
    cloneRes = []
  } else if (target instanceof Object) {
    cloneRes = {}
  } else {
    return target
  }

  for (const key in target) {
    if (key instanceof Array || Object) {
      cloneRes[key] = deepClone(target[key])
    } else {
      cloneRes[key] = target[key]
    }
  }

  return cloneRes
}

const res = deepClone(person)
res.hobby[1] = '神仙'
console.log(res, person)
