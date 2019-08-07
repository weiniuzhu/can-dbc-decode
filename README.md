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

// => 438.7

```

## Concept
Assuming the rawData in HEX is `0x0000047900000033`, grouped HEX data is `00 00 04 79 00 00 00 33`<br>
In Motorola(big endian) format, The bit map of this rawData is<br>

<img src="https://raw.githubusercontent.com/intecessor/can-dbc-decode/master/assets/bitsmap.PNG" alt="bitMap" width="300" style="max-width:100%;margin:0 auto;display:block"/>

<br>

If have below input:

```
  start: 60,
  size: 4,
  factor: 1,
  offset: 0,
  precision: 5,
  endianness: 1
```

It will decode the data in red frame<br>

<img src="https://raw.githubusercontent.com/intecessor/can-dbc-decode/master/assets/bitdata.png" alt="bitMap" width="300" style="max-width:100%;margin:0 auto;display:block" />

<br>

## Input params

### rawData
`String`, the input Hex data without `0x`, ** rawData should be no signed **.<br>
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
default: 0 - Intel(little endian)


## License
MIT License

Copyright (c) 2019 intecessor


