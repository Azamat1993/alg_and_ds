var LinkedList = require('../src/linked_list').LinkedList;
var LinkedListNode = require('../src/linked_list').LinkedListNode;

describe('linked_list', function(){
  describe('LinkedListNode', function() {
    it('should create list node with value', function(){
      var node = new LinkedListNode(1);

      expect(node.value).toBe(1);
      expect(node.next).toBeNull();
    });

    it('should create list node with object as a value', function() {
      var nodeValue = {value:1, key: 'test'};
      var node = new LinkedListNode(nodeValue);

      expect(node.value.value).toBe(1);
      expect(node.value.key).toBe('test');
      expect(node.next).toBeNull();
    });

    it('should link nodes together', function() {
      var node2 = new LinkedListNode(2);
      var node1 = new LinkedListNode(1, node2);

      expect(node1.next).toBeDefined();
      expect(node2.next).toBeNull();
      expect(node1.value).toBe(1);
      expect(node1.next.value).toBe(2);
    });

    it('should convert node to string', function () {
      var node = new LinkedListNode(1);

      expect(node.toString()).toBe('1');

      node.value = 'string value';
      expect(node.toString()).toBe('string value');
    });

    it('should convert node to string with custom stringifier', function () {
      var nodeValue = { value: 1, key: 'test' };
      var node = new LinkedListNode(nodeValue);
      var toStringCallback = function(value){
        return 'value: ' + value.value + ', key: ' + value.key;
      }

      expect(node.toString(toStringCallback)).toBe('value: 1, key: test');
    });
  });

  describe('LinkedList', function() {
    it('should create empty LinkedList', function(){
      var linkedList = new LinkedList();
      expect(linkedList.toString()).toBe('');
    });

    it('should append node to linked list', function(){
      var linkedList = new LinkedList();

      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();

      linkedList.append(1);
      linkedList.append(2);

      expect(linkedList.toString()).toBe('1,2');
      expect(linkedList.tail.next).toBeNull();
    });

    it('should prepend node to linked list', function() {
      var linkedList = new LinkedList();

      linkedList.prepend(2);
      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('2');

      linkedList.append(1);
      linkedList.prepend(3);

      expect(linkedList.toString()).toBe('3,2,1');
    });

    it('should delete node by value from linked list', function() {
      const linkedList = new LinkedList();

      expect(linkedList.delete(5)).toBeNull();

      linkedList.append(1);
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      linkedList.append(3);
      linkedList.append(3);
      linkedList.append(4);
      linkedList.append(5);

      expect(linkedList.head.toString()).toBe('1');
      expect(linkedList.tail.toString()).toBe('5');

      const deletedNode = linkedList.delete(3);
      expect(deletedNode.value).toBe(3);
      expect(linkedList.toString()).toBe('1,1,2,4,5');

      linkedList.delete(3);
      expect(linkedList.toString()).toBe('1,1,2,4,5');

      linkedList.delete(1);
      expect(linkedList.toString()).toBe('2,4,5');

      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('5');

      linkedList.delete(5);
      expect(linkedList.toString()).toBe('2,4');

      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('4');

      linkedList.delete(4);
      expect(linkedList.toString()).toBe('2');

      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('2');

      linkedList.delete(2);
      expect(linkedList.toString()).toBe('');
    });

    it('should delete linked list tail', function() {
      const linkedList = new LinkedList();

      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);

      expect(linkedList.head.toString()).toBe('1');
      expect(linkedList.tail.toString()).toBe('3');

      const deletedNode1 = linkedList.deleteTail();

      expect(deletedNode1.value).toBe(3);
      expect(linkedList.toString()).toBe('1,2');
      expect(linkedList.head.toString()).toBe('1');
      expect(linkedList.tail.toString()).toBe('2');

      const deletedNode2 = linkedList.deleteTail();

      expect(deletedNode2.value).toBe(2);
      expect(linkedList.toString()).toBe('1');
      expect(linkedList.head.toString()).toBe('1');
      expect(linkedList.tail.toString()).toBe('1');

      const deletedNode3 = linkedList.deleteTail();

      expect(deletedNode3.value).toBe(1);
      expect(linkedList.toString()).toBe('');
      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();
    });

    it('should delete linked list head', function() {
      const linkedList = new LinkedList();

      expect(linkedList.deleteHead()).toBeNull();

      linkedList.append(1);
      linkedList.append(2);

      expect(linkedList.head.toString()).toBe('1');
      expect(linkedList.tail.toString()).toBe('2');

      const deletedNode1 = linkedList.deleteHead();

      expect(deletedNode1.value).toBe(1);
      expect(linkedList.toString()).toBe('2');
      expect(linkedList.head.toString()).toBe('2');
      expect(linkedList.tail.toString()).toBe('2');

      const deletedNode2 = linkedList.deleteHead();

      expect(deletedNode2.value).toBe(2);
      expect(linkedList.toString()).toBe('');
      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();
    });

    xit('should reverse linked list', function() {
      const linkedList = new LinkedList();

      // Add test values to linked list.
      linkedList.append(1).append(2).append(3);

      expect(linkedList.toString()).toBe('1,2,3');
      expect(linkedList.head.value).toBe(1);
      expect(linkedList.tail.value).toBe(3);

      // Reverse linked list.
      linkedList.reverse();
      expect(linkedList.toString()).toBe('3,2,1');
      expect(linkedList.head.value).toBe(3);
      expect(linkedList.tail.value).toBe(1);

      // Reverse linked list back to initial state.
      linkedList.reverse();
      expect(linkedList.toString()).toBe('1,2,3');
      expect(linkedList.head.value).toBe(1);
      expect(linkedList.tail.value).toBe(3);
    });

    it('should find node by value', function() {
      const linkedList = new LinkedList();

      expect(linkedList.find({ value: 5 })).toBeNull();

      linkedList.append(1);
      expect(linkedList.find({ value: 1 })).toBeDefined();

      linkedList
        .append(2)
        .append(3);

      const node = linkedList.find({ value: 2 });

      expect(node.value).toBe(2);
      expect(linkedList.find({ value: 5 })).toBeNull();
    });

    it('should create linked list from array', function() {
      const linkedList = new LinkedList();
      linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);

      expect(linkedList.toString()).toBe('1,1,2,3,3,3,4,5');
    });
  });
});
