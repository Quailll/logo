const SVG = require("./svg");
const { Circle,Square,Triangle } =require("./shape")

test("The logo name should be 3 characters", ()=>{
  const error = new Error("Logo name has to be 3 characters.");
  const svg = new SVG();
  expect(() => svg.setText("fedf")).toThrow(error)
})