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

  if (typeof rawData === 'undefined') {
    throw new Error('input HEX data is required')
  }

  if (rawData.length < 16) {
    throw new Error('Invalid input HEX data')
  }

  if (!Number.isInteger(start)) {
    throw new Error('Invalid start position')
  }

  if (!size || !Number.isInteger(size)) {
    throw new Error('Invalid bit size')
  }

  const res = readData(rawData, start, size, endianness);
  return roundTo(res * (factor || 1) + (offset || 0), Math.min(precision || 20, getPrecesion(res * (factor || 1) + (offset || 0))))
}