function QuickFind(N) {
  this.ids = new Array(N);
  this.sz = new Array(N);

  for(var i = 0; i < N; i++) {
    this.ids[i] = i;
    this.sz[i] = 1;
  }
}

QuickFind.prototype.union = function(p, q) {
  var i = this.root(p);
  var j = this.root(q);

  if (i === j) {
    return;
  }
  if (this.sz[i] < this.sz[j]) {
    this.ids[i] = j;
    this.sz[j] += this.sz[i];
  } else {
    this.ids[j] = i;
    this.sz[i] += this.sz[j];
  }
}

QuickFind.prototype.root = function(i) {
  while (this.ids[i] !== i) {
    this.ids[i] = this.ids[this.ids[i]];
    i = this.ids[i];
  }
  return i;
}

QuickFind.prototype.connected = function(p, q) {
  return this.root(p) === this.root(q);
}

module.exports = QuickFind
