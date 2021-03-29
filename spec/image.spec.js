const Image = require('../src/image.js');

describe("Testing commands that are changing image size", function () {

  fit("can create a new 3 x 3 image with all white pixels", function () {
    let image = new Image(3, 3);
    expect(image.displayImage()).toEqual([
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
    ]);
  });

    fit("can create a new 2 x 2 image with all white pixels", function () {
    let image = new Image(2, 2);
    expect(image.displayImage()).toEqual([
      ['O', 'O'],
      ['O', 'O'],
    ]);
  });
});