const ShapeBlueprint = require("./shapeBlueprint");

class CircleShape extends ShapeBlueprint {
  render() {
    return `<circle cx="50" cy="50" r="50" fill="${this.logoColour}" />`;
  }
}

module.exports = CircleShape;