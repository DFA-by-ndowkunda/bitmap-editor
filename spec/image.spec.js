const Image = require('../src/image.js');

describe('Image', function() {

  it('can show a 2x2 white grid', function() {
    const image = new Image(2, 2);
    let result = image.show();
    expect(result).toEqual('OO\nOO');
  });

  it('can show a 3x3 white grid', function() {
    const image = new Image(3, 3);
    expect(image.show()).toEqual('OOO\nOOO\nOOO');
  });

  it(' can change colour of pixel (X,Y) in grid', function() {
    const image = new Image(3, 3);
    image.colour(2, 2, 'C');
    expect(image.show()).toEqual('OOO\nOOO\nOOC');
  });

  it('can reset grid to contain all white pixels', function() {
    const image = new Image(3, 3);
    image.colour(0,0,'C');
    image.reset();
    expect(image.show()).toEqual('OOO\nOOO\nOOO');
  });
  
  it('can colour pixels in row Y between columns X1 and X2 (inclusive)', function() {
    const image = new Image(3, 3);
    image.colourVertical(0, 0 , 2, 'C');
    expect(image.show()).toEqual('COO\nCOO\nCOO');
  });
  fit('can colour pixels in row Y between columns X1 and X2 (inclusive)', function() {
    const image = new Image(3, 3);
    image.colourVertical(2, 0 , 2, 'C');
    expect(image.show()).toEqual('OOC\nOOC\nOOC');
  });

  it('can colour pixels in column X between rows Y1 and Y2 (inclusive)', function() {
    const image = new Image(3, 3);
    image.colourHorizontal(0, 0 , 2, 'C');
    expect(image.show()).toEqual('CCC\nOOO\nOOO');
  });
  it('can colour pixels in column X between rows Y1 and Y2 (inclusive)', function() {
    const image = new Image(3, 3);
    image.colourHorizontal(1, 0 , 2, 'C');
    expect(image.show()).toEqual(' OOO\nCCC\nOOO');
  });
});