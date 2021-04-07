const os = require('os');
const Image = require('../src/image.js');

describe('Image', function() {

  it('can show a 2x2 white grid', function() {
    const image = new Image(2, 2);
    let result = image.show();
    expect(result).toEqual(`OO${os.EOL}OO`);
  });

  it('can show a 3x3 white grid', function() {
    const image = new Image(3, 3);
    expect(image.show()).toEqual(`OOO${os.EOL}OOO${os.EOL}OOO`);
  });

  it(' can change colour of pixel (X,Y) in grid', function() {
    const image = new Image(3, 3);
    image.colour(2, 2, 'C');
    expect(image.show()).toEqual(`OOO${os.EOL}OOO${os.EOL}OOC`);
  });

  it('can reset grid to contain all white pixels', function() {
    const image = new Image(3, 3);
    image.colour(0,0,'C');
    image.clear();
    expect(image.show()).toEqual(`OOO${os.EOL}OOO${os.EOL}OOO`);
  });
  
  it('can colour pixels in row Y between columns X1 and X2 (inclusive)', function() {
    const image = new Image(3, 3);
    image.colourVertical(0, 0 , 2, 'C');
    expect(image.show()).toEqual(`COO${os.EOL}COO${os.EOL}COO`);
  });
  it('can colour pixels in row Y between columns X1 and X2 (inclusive)', function() {
    const image = new Image(3, 3);
    image.colourVertical(2, 0 , 2, 'C');
    expect(image.show()).toEqual(`OOC${os.EOL}OOC${os.EOL}OOC`);
  });

  it('can colour pixels in column X between rows Y1 and Y2 (inclusive)', function() {
    const image = new Image(3, 3);
    image.colourHorizontal(0, 0 , 2, 'C');
    expect(image.show()).toEqual(`CCC${os.EOL}OOO${os.EOL}OOO`);
  });
  it('can colour pixels in column X between rows Y1 and Y2 (inclusive)', function() {
    const image = new Image(3, 3);
    image.colourHorizontal(1, 0 , 2, 'C');
    expect(image.show()).toEqual(`OOO${os.EOL}CCC${os.EOL}OOO`);
  });
});