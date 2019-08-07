const decode = require('./index')

const input1 = {
  rawData: '46220000FFFFFFFF',
  start: 0,
  size: 32,
  factor: 0.05,
  offset: 0,
  precision: 5,
  endianness: 0
}
console.log('>>> decode result', decode(input1))
// expected output: 438.7

const input2 = {
  rawData: '0000047900000033',
  start: 60,
  size: 4,
  factor: 1,
  offset: 0,
  precision: 5,
  endianness: 1
}
console.log('>>> decode result', decode(input2))
// expected output: 3

