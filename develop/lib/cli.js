const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Square, Triangle } = require("./shape");
const {writeFile} = require("fs/promises");

class CLI {
  run() {
    const questions = [
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
      },
    ];
    return inquirer
      .prompt(questions)
      .then(({ text, textColor, shapeType, shapeColor }) => {
        
        let shape;

        

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
        shape.setColor(shapeColor);
        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shape);
        return writeFile("logo.svg", svg.render());
      })
      // .then(() => {
      //   console.log('test');
      // })
      .catch((error) => {
        console.log(error);
        console.log("something went wrong!");
      });
  }
}
module.exports = CLI;
