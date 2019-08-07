'use strict'

const roundTo = require('round-to');
const {
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
  const res = readData(rawData, start, size,endianness);
  return roundTo(res * (factor || 1) + (offset || 0), Math.min(precision || 20, getPrecesion(res * factor + offset)))
}