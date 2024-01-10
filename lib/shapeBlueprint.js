// npm package to validate CSS3 compatible color value
const isCss3Color = require("is-css3-color");

class Shape {
  constructor({ logoName, textColour, logoColour, logoShape }) {
    this.logoShape = logoShape;

    this.validateTextResponse(logoName);
    this.logoName = logoName;

    this.validateColorResponse(textColour);
    this.textColour = textColour;

    this.validateColorResponse(logoColour);
    this.logoColour = logoColour;
  }

  ifResponseEmpty(input) {
    if (!input) throw new Error("Input cannot be empty");
  }

  validateTextResponse(input) {
    this.ifResponseEmpty(input);

    if (input.length > 3) {
      throw new Error("Logo text cannot be more than 3 characters");
    }
  }

  validateColorResponse(input) {
    this.ifResponseEmpty(input);

    // Change all CSS named colors to lowercase
    input = input.toLowerCase();

    if (!isCss3Color(input)) {
      throw new Error("Please enter a valid CSS color keyword or hex code");
    }
  }

  render() {
    throw new Error("Child shapes must incorporate a render() method");
  }
}

module.exports = Shape;