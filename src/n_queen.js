function NQueen(n) {
  this.n = n;
  this.board = new Array(n);

  for(var i = 0; i < n; i++) {
    this.board[i] = new Array(n);
  }

  for(var i = 0; i < n; i++ ){
    for (var j = 0; j < n; j++ ){
      this.board[i][j] = 0;
    }
  }
}

NQueen.prototype.solve = function(n) {
  this.board[0][0] = 1;
  return this.board;
}

var nQueen = new NQueen(8);

console.log(nQueen.solve());

module.exports = NQueen;
