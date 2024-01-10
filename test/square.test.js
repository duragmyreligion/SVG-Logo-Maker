const SquareShape = require("../lib/squareShape");

describe("Square", () => {
  describe("Render Method", () => {
    it("should render a square string", () => {
      // Arrange
      const testData = {
        logoName: "Sun",
        textColour: "red",
        logoColour: "yellow",
        logoShape: "square",
      };

      // Act
      const square = new SquareShape(testData);

      const expectedSVGString = `<rect width="100" height="100" fill="yellow" />`;

      // Assert
      expect(square.render()).toBe(expectedSVGString);
    });
  });
});