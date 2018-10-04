function dfs(graph, vertexA, callbacks) {
  callbacks = callbacks || {
    enterVertex: function() {},
    leaveVertex: function() {}
  };
  var prevVertex = null;
  var currentVertex = null;
  graph.getAllVertices().forEach(function(v) {
    currentVertex = v.getKey();

    callbacks.enterVertex({
      currentVertex: currentVertex,
      previousVertex: prevVertex
    });

    prevVertex = currentVertex;

    callbacks.leaveVertex('A');
  });
}

module.exports = dfs;
