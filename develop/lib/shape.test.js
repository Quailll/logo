const {Circle,Square,Triangle} = require("./shape");
describe('Circle', () =>{
  test('should take in color of shape', ()=>
  {
    const svg = '<circle cx="150" cy="100" r="90" fill="blue" />';
    const circle = new Circle();
    circle.setColor("blue");
    const realSvg = circle.render();
    expect(realSvg).toEqual(svg);
  });
});


describe("Square", () => {
  test("should take in color of shape", () => {
    const svg = '<rect x="60" y="10" width="180" height="180" fill="blue" />';
    const square = new Square();
    square.setColor("blue");
    const realSvg = square.render();
    expect(realSvg).toEqual(svg);
  });
});


describe("Triangle", () => {
  test("should take in color of shape", () => {
    const svg =
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
    const triangle = new Triangle();
    triangle.setColor("blue");
    const realSvg = triangle.render();
    expect(realSvg).toEqual(svg);
  });
});