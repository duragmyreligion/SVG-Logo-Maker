const TriangleShape = require("../lib/triangleShape");

describe("Triangle", () => {
  describe("Render Method", () => {
    it("should render a triangle string", () => {
      // Arrange
      const testData = {
        logoName: "Sun",
        textColour: "red",
        logoColour: "#000",
        logoShape: "triangle",
      };

      // Act
      const triangle = new TriangleShape(testData);

      const expectedSVGString = `<polygon points="100 0, 0 ,0 50, 100" fill="#000" />`;

      // Assert
      expect(triangle.render()).toBe(expectedSVGString);
    });
  });
});