# iso-paper-sizes
The dimensions (in millimetres) of each size in the [A, B, and C series](https://en.wikipedia.org/wiki/ISO_216).

## install
```sh
$ npm install iso-paper-sizes
```

## (somewhat flexible) usage
```js
var sizes = require('iso-paper-sizes')

// Choose Your Own Case™
console.log(sizes.a[4])
> [210, 297]

console.log(sizes.A[4])
> [210, 297]

// Or simply require the series you need,
// and call it whatever you want!
var A = require('iso-paper-sizes/a')
var beemovie = require('iso-paper-sizes/b')
var ç = require('iso-paper-sizes/c')

console.log(A[4])
> [210, 297]
```
