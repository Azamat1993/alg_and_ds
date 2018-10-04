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

GraphVertex.prototype.findEdge = function(edge) {
  return this.edges.filter(function(e) {
    return e.startVertex === edge || e.endVertex === edge;
  })[0] || null;
}

GraphVertex.prototype.getDegree = function() {
  return this.edges.length;
}

function GraphEdge(v1, v2) {
  this.startVertex = v1;
  this.endVertex = v2;
}

GraphEdge.prototype.toString = function() {
  return this.startVertex + '_' + this.endVertex;
}

module.exports = {
  GraphVertex: GraphVertex,
  GraphEdge: GraphEdge
}
