var graph = require('../src/graph');

var GraphVertex = graph.GraphVertex;
var GraphEdge = graph.GraphEdge;

describe('graph', function(){
  describe('GraphVertex', function() {
    it('should throw an error when trying to create vertex without value', function() {
      var vertex = null;

      function createEmptyVertex() {
        vertex = new GraphVertex();
      }

      expect(vertex).toBeNull();
      expect(createEmptyVertex).toThrow();
    });

    it('should create graph vertex', function() {
      const vertex = new GraphVertex('A');

      expect(vertex).toBeDefined();
      expect(vertex.value).toBe('A');
      expect(vertex.toString()).toBe('A');
      expect(vertex.getKey()).toBe('A');
      expect(vertex.edges.toString()).toBe('');
      expect(vertex.getEdges()).toEqual([]);
    });

    fit('should add edges to vertex and check if it exists', function() {
      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      vertexA.addEdge(edgeAB);

      expect(vertexA.hasEdge(edgeAB)).toBe(true);
      expect(vertexB.hasEdge(edgeAB)).toBe(false);
      expect(vertexA.getEdges().length).toBe(1);
      expect(vertexA.getEdges()[0].toString()).toBe('A_B');
    });

    fit('should delete edges from vertex', function() {
      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      const edgeAC = new GraphEdge(vertexA, vertexC);
      vertexA.addEdge(edgeAB)
        .addEdge(edgeAC);

      expect(vertexA.hasEdge(edgeAB)).toBe(true);
      expect(vertexB.hasEdge(edgeAB)).toBe(false);

      expect(vertexA.hasEdge(edgeAC)).toBe(true);
      expect(vertexC.hasEdge(edgeAC)).toBe(false);

      expect(vertexA.getEdges().length).toBe(2);

      expect(vertexA.getEdges()[0].toString()).toBe('A_B');
      expect(vertexA.getEdges()[1].toString()).toBe('A_C');

      vertexA.deleteEdge(edgeAB);
      expect(vertexA.hasEdge(edgeAB)).toBe(false);
      expect(vertexA.hasEdge(edgeAC)).toBe(true);
      expect(vertexA.getEdges()[0].toString()).toBe('A_C');

      vertexA.deleteEdge(edgeAC);
      expect(vertexA.hasEdge(edgeAB)).toBe(false);
      expect(vertexA.hasEdge(edgeAC)).toBe(false);
      expect(vertexA.getEdges().length).toBe(0);
    });

    fit('should delete all edges from vertex', function() {
      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      const edgeAC = new GraphEdge(vertexA, vertexC);
      vertexA.addEdge(edgeAB)
        .addEdge(edgeAC);

      expect(vertexA.hasEdge(edgeAB)).toBe(true);
      expect(vertexB.hasEdge(edgeAB)).toBe(false);

      expect(vertexA.hasEdge(edgeAC)).toBe(true);
      expect(vertexC.hasEdge(edgeAC)).toBe(false);

      expect(vertexA.getEdges().length).toBe(2);

      vertexA.deleteAllEdges();

      expect(vertexA.hasEdge(edgeAB)).toBe(false);
      expect(vertexB.hasEdge(edgeAB)).toBe(false);

      expect(vertexA.hasEdge(edgeAC)).toBe(false);
      expect(vertexC.hasEdge(edgeAC)).toBe(false);

      expect(vertexA.getEdges().length).toBe(0);
    });

    fit('should return vertex neighbors in case if current node is start one', function() {
      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      const edgeAC = new GraphEdge(vertexA, vertexC);
      vertexA.addEdge(edgeAB)
        .addEdge(edgeAC);

      expect(vertexB.getNeighbors()).toEqual([]);

      const neighbors = vertexA.getNeighbors();

      expect(neighbors.length).toBe(2);
      expect(neighbors[0]).toEqual(vertexB);
      expect(neighbors[1]).toEqual(vertexC);
    });

    fit('should return vertex neighbors in case if current node is end one', function() {
      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');

      const edgeBA = new GraphEdge(vertexB, vertexA);
      const edgeCA = new GraphEdge(vertexC, vertexA);
      vertexA.addEdge(edgeBA)
        .addEdge(edgeCA);

      expect(vertexB.getNeighbors()).toEqual([]);

      const neighbors = vertexA.getNeighbors();

      expect(neighbors.length).toBe(2);
      expect(neighbors[0]).toEqual(vertexB);
      expect(neighbors[1]).toEqual(vertexC);
    });

    fit('should check if vertex has specific neighbor', function() {
      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      vertexA.addEdge(edgeAB);

      expect(vertexA.hasNeighbor(vertexB)).toBe(true);
      expect(vertexA.hasNeighbor(vertexC)).toBe(false);
    });

    fit('should edge by vertex', function() {
      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      vertexA.addEdge(edgeAB);

      expect(vertexA.findEdge(vertexB)).toEqual(edgeAB);
      expect(vertexA.findEdge(vertexC)).toBeNull();
    });

    fit('should calculate vertex degree', function() {
      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');

      expect(vertexA.getDegree()).toBe(0);

      const edgeAB = new GraphEdge(vertexA, vertexB);
      vertexA.addEdge(edgeAB);

      expect(vertexA.getDegree()).toBe(1);

      const edgeBA = new GraphEdge(vertexB, vertexA);
      vertexA.addEdge(edgeBA);

      expect(vertexA.getDegree()).toBe(2);

      vertexA.addEdge(edgeAB);
      expect(vertexA.getDegree()).toBe(3);

      expect(vertexA.getEdges().length).toEqual(3);
    });
  });
});
