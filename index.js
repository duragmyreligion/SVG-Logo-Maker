const fs = require('fs');
const { createSVG } = require("./lib/createSVG");
const { createShape } = require("./lib/createShape");

async function run() {
    const inquirer = await import('inquirer');
  
    const data = await inquirer.default.prompt([
      {
        type: "input",
        name: "logoName",
        message: "Please enter 1-3 letters to be put on your logo:",
      },
              {
            type: "input",
            name: "textColour",
            message: "Please enter a keyword for your colour or hexadecimal number for the logo's text colour:",
        },
        {
            type: "input",
            name: "logoColour",
            message: "Please enter a keyword for your colour or hexadecimal number for your logo's colour:",
        },
        {
            type: "list",
            name: "logoShape",
            message: "Please choose a shape for your logo:",
            choices: ["triangle", "circle", "square"],
        },
    ]);
  
    const svgPath = "./dist/logo.svg";
    const finalLogo = createShape(data);
  
    fs.writeFile(svgPath, createSVG(finalLogo), (err) =>
      err ? console.error(err) : console.log("Created logo.svg")
    );
  }
  
  run().catch((err) => console.error(err));
