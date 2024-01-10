const CircleShape = require("./circleShape");
const SquareShape = require("./squareShape");
const TriangleShape = require("./triangleShape");

const createShape = (data) => {
  const { logoShape } = data;

  switch (logoShape) {
    case "circle":
      return new CircleShape(data);

    case "triangle":
      return new TriangleShape(data);

    case "square":
      console.log(data);
      return new SquareShape(data);

    default:
      return "An error has occurred...";
  }
};

module.exports = { createShape };