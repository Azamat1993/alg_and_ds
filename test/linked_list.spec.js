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
  });
});
