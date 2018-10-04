function GraphVertex(value) {
  if (!value) {
    throw new Error('Vertex should have a value');
  }

  this.edges = [];
  this.value = value;
}

GraphVertex.prototype.toString = function() {
  return this.value;
}

GraphVertex.prototype.addEdge = function(edge) {
  this.edges.push(edge);
  return this;
}

GraphVertex.prototype.hasEdge = function(edge) {
  return this.edges.indexOf(edge) >= 0;
}

GraphVertex.prototype.getNeighbors = function() {
  var self = this;
  return this.edges.map(function(edge) {
    if (edge.startVertex === self) {
      return edge.endVertex;
    } else if (edge.endVertex === self) {
      return edge.startVertex;
    }
    return null;
  });
}

GraphVertex.prototype.deleteEdge = function(edge) {
  var index = this.edges.indexOf(edge);
  if (index >= 0) {
    this.edges.splice(index, 1);
  }

  return this;
}

GraphVertex.prototype.deleteAllEdges = function() {
  this.edges = [];
}

GraphVertex.prototype.getKey = function() {
  return this.value;
}

GraphVertex.prototype.getEdges = function() {
  return this.edges;
}

GraphVertex.prototype.hasNeighbor = function(v) {
  return this.edges.some(function(edge) {
    return edge.startVertex === v || edge.endVertex === v;
  });
}

GraphVertex.prototype.findEdge = function(v) {
  return this.edges.filter(function(e) {
    return e.startVertex === v || e.endVertex === v;
  })[0] || null;
}

GraphVertex.prototype.getDegree = function() {
  return this.edges.length;
}

function GraphEdge(v1, v2, w) {
  this.startVertex = v1;
  this.endVertex = v2;
  this.weight = w || 0;
}

GraphEdge.prototype.toString = function() {
  return this.getKey();
}

GraphEdge.prototype.getKey = function() {
  return this.startVertex.getKey() + '_' + this.endVertex.getKey();
}

GraphEdge.prototype.reverse = function() {
  var temp = this.startVertex;
  this.startVertex = this.endVertex;
  this.endVertex = temp;
}

function Graph(isDirected) {
  this.vertices = {};
  this.edges = {};
  this.isDirected = !!isDirected;
}

Graph.prototype.getNeighbors = function(v) {
  return v.getNeighbors();
}

Graph.prototype.getWeight = function() {
  return this.getAllEdges().reduce(function(acc, edge) {
    return acc + edge.weight;
  }, 0);
}

Graph.prototype.deleteEdge = function(edge) {
  if (!this.edges[edge.getKey()]) {
    throw new Error('zad');
  } else {
    delete this.edges[edge.getKey()];
  }

  var startVertex = this.getVertexByKey(edge.startVertex.getKey());
  var endVertex = this.getVertexByKey(edge.endVertex.getKey());

  startVertex.deleteEdge(edge);
  endVertex.deleteEdge(edge);
}

Graph.prototype.getAllEdges = function() {
  return Object.keys(this.edges).map(function(edge) { return this.edges[edge]}.bind(this));
}

Graph.prototype.findEdge = function(v1, v2) {
  var vertex = this.findVertexByKey(v1.getKey());

  if (!vertex) {
    return null;
  }

  return vertex.findEdge(v2);
}

Graph.prototype.getAdjacencyMatrix = function() {
  var vertices = this.getAllVertices();
  var verticesIndexes = this.getVerticesIndices();

  var res = Array.apply(null, Array(vertices.length)).map(function(){
    return Array.apply(null, Array(vertices.length)).map(function() {
      return Infinity;
    });
  });

  vertices.forEach(function(vertice, verticeIndex) {
    vertice.getNeighbors().forEach(function(neighbor) {
      var neighborIndex = verticesIndexes[neighbor.getKey()];
      var edge = this.findEdge(vertice, neighbor);
      res[verticeIndex][neighborIndex] = edge ? edge.weight : Infinity;
    }.bind(this))
  }.bind(this));

  return res;
}

Graph.prototype.getVerticesIndices = function() {
  var res = {};
  this.getAllVertices().forEach(function(v, i) {
    res[v.getKey()] = i;
  });

  return res;
}

Graph.prototype.addVertex = function(v) {
  this.vertices[v.getKey()] = v;
  return this;
}

Graph.prototype.getVertexByKey = function(key) {
  return this.vertices[key];
}

Graph.prototype.addEdge = function(e) {
  var startVertex = this.getVertexByKey(e.startVertex.getKey());
  var endVertex = this.getVertexByKey(e.endVertex.getKey());

  if (!startVertex) {
    this.addVertex(e.startVertex);
    startVertex = this.getVertexByKey(e.startVertex.getKey());
  }

  if (!endVertex) {
    this.addVertex(e.endVertex);
    endVertex = this.getVertexByKey(e.endVertex.getKey());
  }

  if (this.edges[e.getKey()]) {
    throw 'Already exist edge';
  } else {
    this.edges[e.getKey()] = e;
  }

  if (this.isDirected) {
    startVertex.addEdge(e);
  } else {
    startVertex.addEdge(e);
    endVertex.addEdge(e);
  }

  return this;
}

Graph.prototype.getAllVertices = function() {
  var res = Object.keys(this.vertices).map(function(v, i) {
    return this.vertices[v];
  }.bind(this));

  return res;
}

Graph.prototype.findVertexByKey = function(key) {
  return this.vertices[key] || null;
}

Graph.prototype.toString = function() {
  return Object.keys(this.vertices).join(',');
}

module.exports = {
  GraphVertex: GraphVertex,
  GraphEdge: GraphEdge,
  Graph: Graph
}
