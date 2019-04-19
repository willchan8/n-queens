/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

//I - Number which represents the size of board AND number of rooks
//O - Return matrix with rooks on it (place rooks with togglePiece function)
//C - N/A 
//E - Has to pass in a positive integers
window.findNRooksSolution = function(n) {
  var board = new Board({'n': n});
  var solution = board.rows();
  var rooks = 0;
  var row = 0;
  var col = 0;

  for (var i = 0; i < n; i++) {
    if (rooks === n) {
      return solution;
    }
    if (!board.hasAnyRooksConflicts()) {
      board.togglePiece(row, col);
      rooks++, row++, col++;
    } 
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({'n': n})
  var solutionCount = 0;
  
  // Base Case
  var helper = function (row) {
    if (row === n) {
      solutionCount++;
      return;
    }

    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyRooksConflicts()) {
        helper(row + 1);
      }
      board.togglePiece(row, col);
    }
  };

  helper(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({'n': n});
  var solution = board.rows();
  var found = false;

  var helper = function (row) {
    if (row === n) {
      found = true;
      return solution;
    }

    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyQueensConflicts()) {
        helper(row + 1);
      }
      if (found) {
        return;
      }
      board.togglePiece(row, col);
    }
  };

  helper(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({'n': n})
  var solutionCount = 0;
  // Base Case

  if (n === 2 || n === 3) {
    return solutionCount;
  }

  var helper = function (row) {
    if (row === n) {
      solutionCount++;
      return;
    }

    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyQueensConflicts()) {
        helper(row + 1);
      }
      board.togglePiece(row, col);
    }
  };

  helper(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
