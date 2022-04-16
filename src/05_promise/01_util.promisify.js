const { promisify } = require('util')
const fs = require('fs')

const reader = promisify(fs.readFile)
reader('./test.txt', { encoding: 'utf-8' }).then((res) => {
  console.log(res)
})
