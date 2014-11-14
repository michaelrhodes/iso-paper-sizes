var series = {
  a: require('./a'),
  b: require('./b'),
  c: require('./c')
}

for (var letter in series) {
  if (series.hasOwnProperty(letter)) {
    exports[letter] =
    exports[letter.toUpperCase()] = series[letter]
  }
}
