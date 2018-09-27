function Stack() {
  this._elements = [];
}

Stack.prototype.push = function(val) {
  this._elements.unshift(val);
}

Stack.prototype.toString = function() {
  return this._elements.join(',');
}

Stack.prototype.peek = function(){
  if (!this.isEmpty()) {
    return this._elements[0]
  }
  return null;
}

Stack.prototype.pop = function() {
  if (!this.isEmpty()) {
    return this._elements.shift();
  }
  return null;
}

Stack.prototype.toArray = function() {
  return this._elements;
}

Stack.prototype.isEmpty = function() {
  return this._elements.length === 0;
}

module.exports = {
  Stack: Stack
}
