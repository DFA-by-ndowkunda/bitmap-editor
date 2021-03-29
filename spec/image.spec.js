const Image = require('../src/image.js');

describe("Change image size", function () {

  it("can create a new 3 x 3 image with all white pixels", function () {
    let image = new Image(3, 3);
    expect(image.displayImage()).toEqual([
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
    ]);
  });

    it("can create a new 2 x 2 image with all white pixels", function () {
    let image = new Image(2, 2);
    expect(image.displayImage()).toEqual([
      ['O', 'O'],
      ['O', 'O'],
    ]);
  });
});

describe("Change image pixels to colour C", function () {

  it("can create a new 3 x 3 image with all C pixels", function () {
    let image = new Image(3, 3);
    expect(image.changeColour(3,3,'C')).toEqual("CCC\nCCC\nCCC");
  });
});