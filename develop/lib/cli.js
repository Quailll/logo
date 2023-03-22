const inquirer = require("inquirer");
const SVG = require("./svg");
const Shape = require("./shape")
const fs = require('fs');

class CLI { 
  run(){
    const questions =[
      {
        type: "input",
        message: "Name of logo. Logo name has to be up to three characters.",
        name: "text",
        validate: (text) =>
          text.length === 3 || "Logo name must contain 3 characters", 
      },
      {
        type: "input",
        message: "What color would you like your logo text to be?",
        name: "textColor",
      },
      {
        type: "list",
        message: "What shape would you like your logo to be?",
        choices: ["circle", "square", "triangle"],
        name: "shapeType",
      },
      {
        type: "input",
        message: "What color would you like your logo shape to be?",
        name: "shapeColor",
      }
    ]
    return inquirer
      .prompt(questions)
      .then(({text, textColor, shapeType, ShapeColor})=>{
        const svg = new SVG();
        let shape;

        svg.setText(text, textColor);
        svg.setShape(shape);
        
        switch (shapeType) {
          case "square":
            shape = new Square();
            break;
          case "triangle":
            shape = new Triangle();
            break;
          case "circle":
            shape = new Circle();
            break;
        }
        shape.setColor(shapeColor)
        return fs.writeFile("logo.svg", svg.render());
      })
      .catch((error) =>{
        console.log(error);
        console.log("something went wrong!");
      });
   }   


}
module.exports = CLI;