function Queue() {
  this._elements = [];
}

Queue.prototype.enqueue = function(val) {
  this._elements.push(val);
}

Queue.prototype.toString = function() {
  return this._elements.join(',')
}

Queue.prototype.peek = function() {
  return this._elements[0] || null;
}

Queue.prototype.dequeue = function() {
  if (!this.isEmpty()) {
    return this._elements.shift();
  }
  return null;
}

Queue.prototype.isEmpty = function() {
  return this._elements.length === 0;
}

module.exports = {
  Queue: Queue
}
