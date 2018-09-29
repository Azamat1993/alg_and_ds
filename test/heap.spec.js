var Heap = require('../src/heap').Heap;
var MinHeap = require('../src/heap').MinHeap;

describe('heap', function(){
  describe('Heap', function() {
    it('should not allow to create instance of the Heap directly', function() {
      const instantiateHeap = function() {
        const heap = new Heap();
        heap.add(5);
      };

      expect(instantiateHeap).toThrow();
    });
  });


  describe('MinHeap', function() {
    it('should create an empty min heap', function() {
      const minHeap = new MinHeap();

      expect(minHeap).toBeDefined();
      expect(minHeap.peek()).toBeNull();
      expect(minHeap.isEmpty()).toBe(true);
    });

    it('should add items to the heap and heapify it up', function() {
      const minHeap = new MinHeap();

      minHeap.add(5);
      expect(minHeap.isEmpty()).toBe(false);
      expect(minHeap.peek()).toBe(5);
      expect(minHeap.toString()).toBe('5');

      minHeap.add(3);
      expect(minHeap.peek()).toBe(3);
      expect(minHeap.toString()).toBe('3,5');

      minHeap.add(10);
      expect(minHeap.peek()).toBe(3);
      expect(minHeap.toString()).toBe('3,5,10');

      minHeap.add(1);
      expect(minHeap.peek()).toBe(1);
      expect(minHeap.toString()).toBe('1,3,10,5');

      minHeap.add(1);
      expect(minHeap.peek()).toBe(1);
      expect(minHeap.toString()).toBe('1,1,10,5,3');

      expect(minHeap.poll()).toBe(1);
      expect(minHeap.toString()).toBe('1,3,10,5');

      expect(minHeap.poll()).toBe(1);
      expect(minHeap.toString()).toBe('3,5,10');

      expect(minHeap.poll()).toBe(3);
      expect(minHeap.toString()).toBe('5,10');
    });

    it('should poll items from the heap and heapify it down', function() {
      const minHeap = new MinHeap();

      minHeap.add(5);
      minHeap.add(3);
      minHeap.add(10);
      minHeap.add(11);
      minHeap.add(1);

      expect(minHeap.toString()).toBe('1,3,10,11,5');

      expect(minHeap.poll()).toBe(1);
      expect(minHeap.toString()).toBe('3,5,10,11');

      expect(minHeap.poll()).toBe(3);
      expect(minHeap.toString()).toBe('5,11,10');

      expect(minHeap.poll()).toBe(5);
      expect(minHeap.toString()).toBe('10,11');

      expect(minHeap.poll()).toBe(10);
      expect(minHeap.toString()).toBe('11');

      expect(minHeap.poll()).toBe(11);
      expect(minHeap.toString()).toBe('');

      expect(minHeap.poll()).toBeNull();
      expect(minHeap.toString()).toBe('');
    });

    it('should heapify down through the right branch as well', function() {
      const minHeap = new MinHeap();

      minHeap.add(3);
      minHeap.add(12);
      minHeap.add(10);

      expect(minHeap.toString()).toBe('3,12,10');

      minHeap.add(11);
      expect(minHeap.toString()).toBe('3,11,10,12');

      expect(minHeap.poll()).toBe(3);
      expect(minHeap.toString()).toBe('10,11,12');
    });

    it('should be possible to find item indices in heap', function() {
      const minHeap = new MinHeap();

      minHeap.add(3);
      minHeap.add(12);
      minHeap.add(10);
      minHeap.add(11);
      minHeap.add(11);

      expect(minHeap.toString()).toBe('3,11,10,12,11');

      expect(minHeap.find(5)).toEqual([]);
      expect(minHeap.find(3)).toEqual([0]);
      expect(minHeap.find(11)).toEqual([1, 4]);
    });

    xit('should be possible to remove items from heap with heapify down', function() {
      const minHeap = new MinHeap();

      minHeap.add(3);
      minHeap.add(12);
      minHeap.add(10);
      minHeap.add(11);
      minHeap.add(11);

      expect(minHeap.toString()).toBe('3,11,10,12,11');

      expect(minHeap.remove(3).toString()).toEqual('10,11,11,12');
      expect(minHeap.remove(3).peek()).toEqual(10);
      expect(minHeap.remove(11).toString()).toEqual('10,12');
      expect(minHeap.remove(3).peek()).toEqual(10);
    });

    xit('should be possible to remove items from heap with heapify up', function() {
      const minHeap = new MinHeap();

      minHeap.add(3);
      minHeap.add(10);
      minHeap.add(5);
      minHeap.add(6);
      minHeap.add(7);
      minHeap.add(4);
      minHeap.add(6);
      minHeap.add(8);
      minHeap.add(2);
      minHeap.add(1);

      expect(minHeap.toString()).toBe('1,2,4,6,3,5,6,10,8,7');
      expect(minHeap.remove(8).toString()).toEqual('1,2,4,6,3,5,6,10,7');
      expect(minHeap.remove(7).toString()).toEqual('1,2,4,6,3,5,6,10');
      expect(minHeap.remove(1).toString()).toEqual('2,3,4,6,10,5,6');
      expect(minHeap.remove(2).toString()).toEqual('3,6,4,6,10,5');
      expect(minHeap.remove(6).toString()).toEqual('3,5,4,10');
      expect(minHeap.remove(10).toString()).toEqual('3,5,4');
      expect(minHeap.remove(5).toString()).toEqual('3,4');
      expect(minHeap.remove(3).toString()).toEqual('4');
      expect(minHeap.remove(4).toString()).toEqual('');
    });

    xit('should remove values from heap and correctly re-order the tree', function() {
      const minHeap = new MinHeap();

      minHeap.add(1);
      minHeap.add(2);
      minHeap.add(3);
      minHeap.add(4);
      minHeap.add(5);
      minHeap.add(6);
      minHeap.add(7);
      minHeap.add(8);
      minHeap.add(9);

      expect(minHeap.toString()).toBe('1,2,3,4,5,6,7,8,9');

      minHeap.remove(2);
      expect(minHeap.toString()).toBe('1,4,3,8,5,6,7,9');

      minHeap.remove(4);
      expect(minHeap.toString()).toBe('1,5,3,8,9,6,7');
    });
  });
});
