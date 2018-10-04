var graph = require('../src/graph');

var GraphVertex = graph.GraphVertex;
var GraphEdge = graph.GraphEdge;
var Graph = graph.Graph;

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

    it('should add edges to vertex and check if it exists', function() {
      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      vertexA.addEdge(edgeAB);

      expect(vertexA.hasEdge(edgeAB)).toBe(true);
      expect(vertexB.hasEdge(edgeAB)).toBe(false);
      expect(vertexA.getEdges().length).toBe(1);
      expect(vertexA.getEdges()[0].toString()).toBe('A_B');
    });

    it('should delete edges from vertex', function() {
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

    it('should delete all edges from vertex', function() {
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

    it('should return vertex neighbors in case if current node is start one', function() {
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

    it('should return vertex neighbors in case if current node is end one', function() {
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

    it('should check if vertex has specific neighbor', function() {
      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      vertexA.addEdge(edgeAB);

      expect(vertexA.hasNeighbor(vertexB)).toBe(true);
      expect(vertexA.hasNeighbor(vertexC)).toBe(false);
    });

    it('should edge by vertex', function() {
      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      vertexA.addEdge(edgeAB);

      expect(vertexA.findEdge(vertexB)).toEqual(edgeAB);
      expect(vertexA.findEdge(vertexC)).toBeNull();
    });

    it('should calculate vertex degree', function() {
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

  describe('GraphEdge', function() {
      it('should create graph edge with default weight', function() {
        const startVertex = new GraphVertex('A');
        const endVertex = new GraphVertex('B');
        const edge = new GraphEdge(startVertex, endVertex);

        expect(edge.getKey()).toBe('A_B');
        expect(edge.toString()).toBe('A_B');
        expect(edge.startVertex).toEqual(startVertex);
        expect(edge.endVertex).toEqual(endVertex);
        expect(edge.weight).toEqual(0);
      });

      it('should create graph edge with predefined weight', function() {
        const startVertex = new GraphVertex('A');
        const endVertex = new GraphVertex('B');
        const edge = new GraphEdge(startVertex, endVertex, 10);

        expect(edge.startVertex).toEqual(startVertex);
        expect(edge.endVertex).toEqual(endVertex);
        expect(edge.weight).toEqual(10);
      });

      it('should be possible to do edge reverse', function() {
        const vertexA = new GraphVertex('A');
        const vertexB = new GraphVertex('B');
        const edge = new GraphEdge(vertexA, vertexB, 10);

        expect(edge.startVertex).toEqual(vertexA);
        expect(edge.endVertex).toEqual(vertexB);
        expect(edge.weight).toEqual(10);

        edge.reverse();

        expect(edge.startVertex).toEqual(vertexB);
        expect(edge.endVertex).toEqual(vertexA);
        expect(edge.weight).toEqual(10);
      });
    });
  describe('Graph', function() {
    it('should add vertices to graph', function() {
      const graph = new Graph();

      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');

      graph.addVertex(vertexA)
        .addVertex(vertexB);

      expect(graph.toString()).toBe('A,B');
      expect(graph.getVertexByKey(vertexA.getKey())).toEqual(vertexA);
      expect(graph.getVertexByKey(vertexB.getKey())).toEqual(vertexB);
    });

    it('should add edges to undirected graph', function() {
      const graph = new Graph();

      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');

      const edgeAB = new GraphEdge(vertexA, vertexB);

      graph.addEdge(edgeAB);
      expect(graph.getAllVertices().length).toBe(2);
      expect(graph.getAllVertices()[0]).toEqual(vertexA);
      expect(graph.getAllVertices()[1]).toEqual(vertexB);

      const graphVertexA = graph.findVertexByKey(vertexA.getKey());
      const graphVertexB = graph.findVertexByKey(vertexB.getKey());
      expect(graph.toString()).toBe('A,B');
      expect(graphVertexA).toBeDefined();
      expect(graphVertexB).toBeDefined();

      expect(graph.findVertexByKey('not existing')).toBeNull();

      expect(graphVertexA.getNeighbors().length).toBe(1);
      expect(graphVertexA.getNeighbors()[0]).toEqual(vertexB);
      expect(graphVertexA.getNeighbors()[0]).toEqual(graphVertexB);

      expect(graphVertexB.getNeighbors().length).toBe(1);
      expect(graphVertexB.getNeighbors()[0]).toEqual(vertexA);
      expect(graphVertexB.getNeighbors()[0]).toEqual(graphVertexA);
    });

    it('should add edges to directed graph', function() {
      const graph = new Graph(true);

      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');

      const edgeAB = new GraphEdge(vertexA, vertexB);

      graph.addEdge(edgeAB);

      const graphVertexA = graph.findVertexByKey(vertexA.getKey());
      const graphVertexB = graph.findVertexByKey(vertexB.getKey());

      expect(graph.toString()).toBe('A,B');
      expect(graphVertexA).toBeDefined();
      expect(graphVertexB).toBeDefined();

      expect(graphVertexA.getNeighbors().length).toBe(1);
      expect(graphVertexA.getNeighbors()[0]).toEqual(vertexB);
      expect(graphVertexA.getNeighbors()[0]).toEqual(graphVertexB);

      expect(graphVertexB.getNeighbors().length).toBe(0);
    });

    it('should find edge by vertices in undirected graph', function() {
      const graph = new Graph();

      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');

      const edgeAB = new GraphEdge(vertexA, vertexB, 10);

      graph.addEdge(edgeAB);

      const graphEdgeAB = graph.findEdge(vertexA, vertexB);
      const graphEdgeBA = graph.findEdge(vertexB, vertexA);
      const graphEdgeAC = graph.findEdge(vertexA, vertexC);
      const graphEdgeCA = graph.findEdge(vertexC, vertexA);

      expect(graphEdgeAC).toBeNull();
      expect(graphEdgeCA).toBeNull();
      expect(graphEdgeAB).toEqual(edgeAB);
      expect(graphEdgeBA).toEqual(edgeAB);
      expect(graphEdgeAB.weight).toBe(10);
    });

    it('should find edge by vertices in directed graph', function() {
      const graph = new Graph(true);

      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');

      const edgeAB = new GraphEdge(vertexA, vertexB, 10);

      graph.addEdge(edgeAB);

      const graphEdgeAB = graph.findEdge(vertexA, vertexB);
      const graphEdgeBA = graph.findEdge(vertexB, vertexA);
      const graphEdgeAC = graph.findEdge(vertexA, vertexC);
      const graphEdgeCA = graph.findEdge(vertexC, vertexA);

      expect(graphEdgeAC).toBeNull();
      expect(graphEdgeCA).toBeNull();
      expect(graphEdgeBA).toBeNull();
      expect(graphEdgeAB).toEqual(edgeAB);
      expect(graphEdgeAB.weight).toBe(10);
    });

    it('should return vertex neighbors', function() {
      const graph = new Graph(true);

      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      const edgeAC = new GraphEdge(vertexA, vertexC);

      graph.addEdge(edgeAB)
        .addEdge(edgeAC);

      const neighbors = graph.getNeighbors(vertexA);

      expect(neighbors.length).toBe(2);
      expect(neighbors[0]).toEqual(vertexB);
      expect(neighbors[1]).toEqual(vertexC);
    });

    it('should throw an error when trying to add edge twice', function() {
      function addSameEdgeTwice() {
        const graph = new Graph(true);

        const vertexA = new GraphVertex('A');
        const vertexB = new GraphVertex('B');

        const edgeAB = new GraphEdge(vertexA, vertexB);

        graph.addEdge(edgeAB)
          .addEdge(edgeAB);
      }

      expect(addSameEdgeTwice).toThrow();
    });

    it('should return the list of all added edges', function() {
      const graph = new Graph(true);

      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      const edgeBC = new GraphEdge(vertexB, vertexC);

      graph.addEdge(edgeAB)
        .addEdge(edgeBC);

      const edges = graph.getAllEdges();

      expect(edges.length).toBe(2);
      expect(edges[0]).toEqual(edgeAB);
      expect(edges[1]).toEqual(edgeBC);
    });

    it('should calculate total graph weight for default graph', function() {
      const graph = new Graph();

      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');
      const vertexD = new GraphVertex('D');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      const edgeBC = new GraphEdge(vertexB, vertexC);
      const edgeCD = new GraphEdge(vertexC, vertexD);
      const edgeAD = new GraphEdge(vertexA, vertexD);

      graph.addEdge(edgeAB)
        .addEdge(edgeBC)
        .addEdge(edgeCD)
        .addEdge(edgeAD);

      expect(graph.getWeight()).toBe(0);
    });

    it('should calculate total graph weight for weighted graph', function() {
      const graph = new Graph();

      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');
      const vertexD = new GraphVertex('D');

      const edgeAB = new GraphEdge(vertexA, vertexB, 1);
      const edgeBC = new GraphEdge(vertexB, vertexC, 2);
      const edgeCD = new GraphEdge(vertexC, vertexD, 3);
      const edgeAD = new GraphEdge(vertexA, vertexD, 4);

      graph.addEdge(edgeAB)
        .addEdge(edgeBC)
        .addEdge(edgeCD)
        .addEdge(edgeAD);

      expect(graph.getWeight()).toBe(10);
    });

    it('should be possible to delete edges from graph', function() {
      const graph = new Graph();

      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      const edgeBC = new GraphEdge(vertexB, vertexC);
      const edgeAC = new GraphEdge(vertexA, vertexC);

      graph.addEdge(edgeAB)
        .addEdge(edgeBC)
        .addEdge(edgeAC);

      expect(graph.getAllEdges().length).toBe(3);

      graph.deleteEdge(edgeAB);

      expect(graph.getAllEdges().length).toBe(2);
      expect(graph.getAllEdges()[0].getKey()).toBe(edgeBC.getKey());
      expect(graph.getAllEdges()[1].getKey()).toBe(edgeAC.getKey());
    });

    it('should should throw an error when trying to delete not existing edge', function() {
      function deleteNotExistingEdge() {
        const graph = new Graph();

        const vertexA = new GraphVertex('A');
        const vertexB = new GraphVertex('B');
        const vertexC = new GraphVertex('C');

        const edgeAB = new GraphEdge(vertexA, vertexB);
        const edgeBC = new GraphEdge(vertexB, vertexC);

        graph.addEdge(edgeAB);
        graph.deleteEdge(edgeBC);
      }

      expect(deleteNotExistingEdge).toThrowError();
    });

    xit('should be possible to reverse graph', function() {
      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');
      const vertexD = new GraphVertex('D');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      const edgeAC = new GraphEdge(vertexA, vertexC);
      const edgeCD = new GraphEdge(vertexC, vertexD);

      const graph = new Graph(true);
      graph.addEdge(edgeAB)
        .addEdge(edgeAC)
        .addEdge(edgeCD);

      expect(graph.toString()).toBe('A,B,C,D');
      expect(graph.getAllEdges().length).toBe(3);
      expect(graph.getNeighbors(vertexA).length).toBe(2);
      expect(graph.getNeighbors(vertexA)[0].getKey()).toBe(vertexB.getKey());
      expect(graph.getNeighbors(vertexA)[1].getKey()).toBe(vertexC.getKey());
      expect(graph.getNeighbors(vertexB).length).toBe(0);
      expect(graph.getNeighbors(vertexC).length).toBe(1);
      expect(graph.getNeighbors(vertexC)[0].getKey()).toBe(vertexD.getKey());
      expect(graph.getNeighbors(vertexD).length).toBe(0);

      graph.reverse();

      expect(graph.toString()).toBe('A,B,C,D');
      expect(graph.getAllEdges().length).toBe(3);
      expect(graph.getNeighbors(vertexA).length).toBe(0);
      expect(graph.getNeighbors(vertexB).length).toBe(1);
      expect(graph.getNeighbors(vertexB)[0].getKey()).toBe(vertexA.getKey());
      expect(graph.getNeighbors(vertexC).length).toBe(1);
      expect(graph.getNeighbors(vertexC)[0].getKey()).toBe(vertexA.getKey());
      expect(graph.getNeighbors(vertexD).length).toBe(1);
      expect(graph.getNeighbors(vertexD)[0].getKey()).toBe(vertexC.getKey());
    });

    it('should return vertices indices', function() {
      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');
      const vertexD = new GraphVertex('D');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      const edgeBC = new GraphEdge(vertexB, vertexC);
      const edgeCD = new GraphEdge(vertexC, vertexD);
      const edgeBD = new GraphEdge(vertexB, vertexD);

      const graph = new Graph();
      graph.addEdge(edgeAB)
        .addEdge(edgeBC)
        .addEdge(edgeCD)
        .addEdge(edgeBD);

      const verticesIndices = graph.getVerticesIndices();
      expect(verticesIndices).toEqual({
        A: 0,
        B: 1,
        C: 2,
        D: 3,
      });
    });

    it('should generate adjacency matrix for undirected graph', function() {
      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');
      const vertexD = new GraphVertex('D');

      const edgeAB = new GraphEdge(vertexA, vertexB);
      const edgeBC = new GraphEdge(vertexB, vertexC);
      const edgeCD = new GraphEdge(vertexC, vertexD);
      const edgeBD = new GraphEdge(vertexB, vertexD);

      const graph = new Graph();
      graph.addEdge(edgeAB)
        .addEdge(edgeBC)
        .addEdge(edgeCD)
        .addEdge(edgeBD);

      const adjacencyMatrix = graph.getAdjacencyMatrix();
      expect(adjacencyMatrix).toEqual([
        [Infinity, 0, Infinity, Infinity],
        [0, Infinity, 0, 0],
        [Infinity, 0, Infinity, 0],
        [Infinity, 0, 0, Infinity],
      ]);
    });

    it('should generate adjacency matrix for directed graph', function() {
      const vertexA = new GraphVertex('A');
      const vertexB = new GraphVertex('B');
      const vertexC = new GraphVertex('C');
      const vertexD = new GraphVertex('D');

      const edgeAB = new GraphEdge(vertexA, vertexB, 2);
      const edgeBC = new GraphEdge(vertexB, vertexC, 1);
      const edgeCD = new GraphEdge(vertexC, vertexD, 5);
      const edgeBD = new GraphEdge(vertexB, vertexD, 7);

      const graph = new Graph(true);
      graph.addEdge(edgeAB)
        .addEdge(edgeBC)
        .addEdge(edgeCD)
        .addEdge(edgeBD);

      const adjacencyMatrix = graph.getAdjacencyMatrix();
      expect(adjacencyMatrix).toEqual([
        [Infinity, 2, Infinity, Infinity],
        [Infinity, Infinity, 1, 7],
        [Infinity, Infinity, Infinity, 5],
        [Infinity, Infinity, Infinity, Infinity],
      ]);
    });
  });
});
