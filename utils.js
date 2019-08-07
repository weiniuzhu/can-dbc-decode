const bitwise = require('bitwise');

function reOrder(s) {
  if (e === 0) {
    let res = []
    for (let i = 0; i < 8; i++) {
      res.push(s.slice(i * 2, i * 2 + 2))
    };
    let arr = res.reverse();
    return arr.join("")
  } else {
    return s
  }
};


function getPrecesion(a) {
  if (!isFinite(a)) return 0;
  var e = 1,
    p = 0;
  while (Math.round(a * e) / e !== a) {
    e *= 10;
    p++;
  }
  return p;
}


function readData(rawData, start, size, endianness) {
  const data = endianness === 1 ? rawData : reOrder(rawData)
  const bitArr = bitwise.buffer.read(Buffer.from(data, 'hex'))
  const targetbit = bitArr.slice(endianness === 1 ? start : (64 - start - size), endianness === 1 ? size : (64 - start))
  return parseInt(targetbit.join(''), 2)
}

module.exports = {
  getPrecesion,
  readData
}