const CircleShape = require("../lib/circleShape");

describe("Circle", () => {
  describe("Render Method", () => {
    it("should render a circle string with specified properties", () => {
      const testData = {
        logoName: "War",
        textColour: "red",
        logoColour: "brown",
        logoShape: "circle",
      };

      // Act
      const circle = new CircleShape(testData);

      const expectedSVGString = `<circle cx="50" cy="50" r="50" fill="brown" />`;

      expect(circle.render()).toBe(expectedSVGString);
    });
  });
});