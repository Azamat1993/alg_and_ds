function LinkedList() {
  this.tail = null;
  this.head = null;
}

LinkedList.prototype.toString = function() {
  var res = [];
  if (this.head) {
    var pointer = this.head;
    while (pointer) {
      res.push(pointer.value);
      pointer = pointer.next;
    }
  }
  return res.join(',')
}

LinkedList.prototype.append = function(val) {
  if (!this.head) {
    this.head = new LinkedListNode(val);
    this.tail = this.head;
  } else {
    var node = new LinkedListNode(val);
    this.tail.next = node;
    this.tail = this.tail.next;
  }
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
