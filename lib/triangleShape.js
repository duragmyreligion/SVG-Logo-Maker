const ShapeBlueprint = require("./shapeBlueprint");

class TriangleShape extends ShapeBlueprint {
  render() {
    return `<polygon points="100 0, 0 ,0 50, 100" fill="${this.logoColour}" />`;
  }
}

module.exports = TriangleShape;