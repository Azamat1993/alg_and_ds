function TrieNode(ch, isComplete) {
  this.character = ch;
  this.isCompleteWord = !!isComplete;
  this.children = {};
}

TrieNode.prototype.addChild = function(ch, isComplete) {
  var newNode = new TrieNode(ch, isComplete);
  this.children[ch] = newNode;
}

TrieNode.prototype.toString = function() {
  return this.character + '*';
}

module.exports = TrieNode;
