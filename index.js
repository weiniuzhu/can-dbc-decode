'use strict'

const roundTo = require('round-to');
const {
  reOrder,
  getPrecesion,
  readData
} = require('./utils.js');

module.exports = function decode(input) {
  const {
    rawData,
    start,
    size,
    factor,
    offset,
    precision,
    endianness
  } = input
  const res = readData(reOrder(rawData), start, size);
  return roundTo(res * factor + offset, Math.min(precision, getPrecesion(res * factor + offset)))
}