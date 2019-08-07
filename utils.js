const bitwise = require('bitwise');

function reOrder(s) {
  if (s && s.length > 15) {
    let res = []
    for (let i = 0; i < 8; i++) {
      res.push(s.slice(i * 2, i * 2 + 2))
    };
    let arr = res.reverse();
    return arr.join("")
  } else {
    return ''
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


function readData(data, start, size) {
  const bitArr = bitwise.buffer.read(Buffer.from(data, 'hex'))
  const targetbit = bitArr.slice(64 - start - size, 64 - start)
  return parseInt(targetbit.join(''), 2)
}

module.exports = {
  reOrder,
  getPrecesion,
  readData
}