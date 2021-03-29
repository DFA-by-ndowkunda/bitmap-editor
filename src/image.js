
class Image {
  constructor(M,N, C='O') {
    this.pixelGrid = Array(M).fill('O').map(pixel => Array(N).fill('O'));
  }
 
  displayImage() {
    return this.pixelGrid
  }
  
  changeColour(M,N,color) {
    for (let i = 0; i < M; i++) {
      this.pixelGrid[i] = color
      for (let j = 0; j < N; j++) {
         this.pixelGrid[i][j] = color
    }
    }
    return this.pixelGrid
  }
 
}
module.exports = Image