const decode = require('./index')

const input = {
  rawData: '46220000FFFFFFFF',
  start: 0,
  size: 32,
  factor: 0.05,
  offset: 0,
  precision: 5,
  endianness: 0
}
console.log('>>> decode result', decode(input))
// expected output: 438.7