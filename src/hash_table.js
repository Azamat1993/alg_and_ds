function HashTable(size) {
  this.buckets = new Array(size || 32);
}

HashTable.prototype.hash = function(str) {
  return str.split('').map(function(ch) {
    return ch.charCodeAt(0);
  }).reduce(function(acc, curr) {
    return acc + curr;
  }, 0) % this.buckets.length;
}

module.exports = {
  HashTable: HashTable
}
