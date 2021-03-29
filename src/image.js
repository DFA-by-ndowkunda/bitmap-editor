const os = require('os');

class Image {
  constructor(M,N) {
    this.pixelGrid = Array(M).fill('O').map(pixel => Array(N).fill('O'));
  }
 
  displayImage() {
    return this.pixelGrid
  }

 
}
module.exports = Image