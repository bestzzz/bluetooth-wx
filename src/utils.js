const utils = {
  max: function(n1, n2) {
    return Math.max(n1, n2)
  },
  len: function(arr) {
    arr = arr || []
    return arr.length
  }
}

module.exports = {
  utils
}