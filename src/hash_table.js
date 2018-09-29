var LinkedList = require('./linked_list').LinkedList;

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

HashTable.prototype.set = function(key, value) {
  var hash = this.hash(key);
  if (!this.buckets[hash]) {
    this.buckets[hash] = new LinkedList();
  }

  if (this.has(key)) {
    this.buckets[hash].deleteHead();
  }

  this.buckets[hash].append({
    key: key,
    value: value
  });

  return this;
}

HashTable.prototype.delete = function(key) {
  var hash = this.hash(key);

  var res = this.get(key);
  delete this.buckets[hash];

  return res || null;
}

HashTable.prototype.getKeys = function() {
  return this.buckets.map(function(bucket) {
    console.log(bucket)
  });
}

HashTable.prototype.get = function(key) {
  var hash = this.hash(key);
  var res;

  if (!this.buckets[hash]) {
    return res;
  }

  var node =  this.buckets[hash].find({
    callback: function(val) {
      return val.key === key;
    }
  });

  if (node) {
    res = node.value.value;
  }
  return res;
}

HashTable.prototype.has = function(key) {
  var hash = this.hash(key);
  if (!this.buckets[hash]) {
    return false;
  } else {
    var node = this.buckets[hash].find({
      callback: function(value) {
        return value.key === key;
      }
    });
    return node !== null;
  }
}

module.exports = {
  HashTable: HashTable
}
