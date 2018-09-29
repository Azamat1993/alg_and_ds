function LinkedList() {
  this.tail = null;
  this.head = null;
}

LinkedList.prototype.toString = function(customStringifier) {
  var res = [];
  if (this.head) {
    var pointer = this.head;
    while (pointer) {
      if (customStringifier) {
        res.push(customStringifier(pointer.value));
      } else {
        res.push(pointer.value);
      }
      pointer = pointer.next;
    }
  }
  return res.join(',')
}

LinkedList.prototype.append = function(val) {
  var node = new LinkedListNode(val);
  if (!this.head) {
    this.head = this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = this.tail.next;
  }

  return this;
}

LinkedList.prototype.delete = function(val) {
  if (!this.head) {
    return null;
  }

  var deletedNode = null;

  while (this.head && this.head.value === val) {
    deletedNode = this.head;
    this.head = this.head.next;
  }

  var currentNode = this.head;

  if (currentNode) {
    while (currentNode.next) {
      if (currentNode.next.value === val) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  if (this.tail.value === val) {
    this.tail = currentNode;
  }

  return deletedNode;
}

LinkedList.prototype.find = function(val) {
  var foundNode = null;

  var currentNode = this.head;

  if (currentNode) {
    while (currentNode) {
      if (val.callback) {
        if (val.callback(currentNode.value)) {
          foundNode = currentNode;
        }
      } else {
        if (val.value === currentNode.value) {
          foundNode = currentNode;
        }
      }
      currentNode = currentNode.next;
    }
  }

  return foundNode;
}

LinkedList.prototype.fromArray = function(arr) {
  this._reset();
  var currentNode;
  for(var i = 0; i< arr.length; i++ ){
    if (i === 0) {
      currentNode = new LinkedListNode(arr[i]);
      this.head = currentNode;
    } else {
      var newNode = new LinkedListNode(arr[i]);
      currentNode.next = newNode;
      currentNode = newNode;
    }
  }

  this.tail = currentNode;

  return this;
}

LinkedList.prototype.deleteTail = function() {
  var deletedNode = this.tail;
  if (this.tail && this.head === this.tail) {
    this._reset();

    return deletedNode;
  }
  var currentNode = this.head;

  if (currentNode) {
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    deletedNode = currentNode.next;
    currentNode.next = null;

    this.tail = currentNode;
  }

  return deletedNode;
}

LinkedList.prototype._reset = function() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.deleteHead = function() {
  var deletedNode = this.head;
  if (this.head && this.head === this.tail) {
    this._reset();
    return deletedNode;
  }

  if (this.head) {
    this.head = this.head.next;
  }

  return deletedNode;
}

LinkedList.prototype.prepend = function(val) {
  if (!this.head) {
    this.head = new LinkedListNode(val);
    this.tail = this.head;
  } else {
    var node = new LinkedListNode(val, this.head);
    this.head = node;
  }
}

function LinkedListNode(value, next) {
  this.value = value;
  this.next = next || null;
}

LinkedListNode.prototype.toString = function(customStringifier) {
  if (customStringifier) {
    return customStringifier(this.value);
  }
  return this.value.toString();
}

module.exports = {
  LinkedList: LinkedList,
  LinkedListNode: LinkedListNode
}
