# can-dbc-decode
Decode CAN DBC data

## Install
```
npm install can-dbc-decode
```

## Usage
```
const decode = require('can-dbc-decode')

const input = {
  rawData: '46220000FFFFFFFF',
  start: 0,
  size: 32,
  factor: 0.05,
  offset: 0,
  precision: 5,
  endianness: 0
}

decode(input)

//=>438.7

```

## Concept
Assuming the rawData in HEX is `0x0000047900000033`, grouped HEX data is `00 00 04 79 00 00 00 33`<br>
The bit map of this rawData is
![bitMap]()

assuming we have several data in this rawData to be decoded, for example
```
  start: 59,
  size: 4,
  factor: 1,
  offset: 0,
  precision: 5,
  endianness: 1
```
it will decode the data in red frame
![bitMap]()

## Input params
### rawData
`String`, the input Hex data without `0x`.<br>
`* required`
### start
`Integer`, the start bit position.<br>
`* required`
### size
`Integer`, the length of bits.<br>
`* required`
### factor
`Number`, factor of the returned data.<br>
default: 1
### offset
`Number`, offset of the returned data.<br>
default: 0
### precision
`Interger`, Max precesion of returned data.<br>
default: -1 // no limitation
### endianness
`0 or 1`, 0 - Intel(little endian) and 1 - Motorola(big endian).<br>
default: 0


