const ShapeBlueprint = require("./shapeBlueprint");

class SquareShape extends ShapeBlueprint {
  render() {
    return `<rect width="100" height="100" fill="${this.logoColour}" />`;
  }
}

module.exports = SquareShape;