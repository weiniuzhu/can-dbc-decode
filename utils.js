const bitwise = require('bitwise');

function reOrder(s) {
  let res = []
  for (let i = 0; i < 8; i++) {
    res.push(s.slice(i * 2, i * 2 + 2))
  };
  let arr = res.reverse();
  return arr.join("")
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
  const bitArr = bitwise.buffer.read(Buffer.from(endianness === 1 ? rawData : reOrder(rawData), 'hex'));
  const targetbit = bitArr.slice(endianness === 1 ? start : (64 - start - size), endianness === 1 ? (start + size) : (64 - start));
  return parseInt(targetbit.join(''), 2)
}

module.exports = {
  getPrecesion,
  readData
}