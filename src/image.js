const os = require('os');

class Image {

  constructor(M, N) {
    this.grid = Array(N).fill('O').map(pixel => Array(M).fill('O'));
  }

  show() {
    return this.grid.map(row => {
      return row.join('');
    }).join(os.EOL);
  }

  clear() {
    this.grid = Array(this.grid.length).fill('O').map(pixel => Array(this.grid[0].length).fill('O'));
    return this.grid;
  }

  colour(X, Y,colour) {
    return this.grid[X][Y] = colour;
  }

  colourVertical(column, row1, row2, colour) {
    for (row1; row1<= row2; row1++){
      this.colour(row1,column,colour);
    }
  }

  colourHorizontal(row, column1, column2, colour) {
    for (column1; column1<= column2; column1++){
      this.colour(row,column1,colour);
    }
  }

}

module.exports = Image;