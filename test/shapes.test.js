const ShapeBlueprint = require("../lib/shapeBlueprint");

const testCases = [
  {
    description: "throws an error when the user response is empty",
    input: {},
    expectedError: new Error("Input cannot be empty"),
  },
  {
    description: "throws an error when the logo text is longer than 3 characters",
    input: { logoName: "noah" },
    expectedError: new Error("Logo text cannot be more than 3 characters"),
  },
  {
    description: "throws an error when the response has an invalid or unrecognized CSS colour",
    input: { logoName: "Sun", textColour: "NotColor" },
    expectedError: new Error("Please enter a valid CSS color keyword or hex code"),
  },
  {
    description: "throws an error when render() is called",
    input: { logoName: "Sun", textColour: "green", logoColour: "brown" },
    expectedError: new Error("Child shapes must incorporate a render() method"),
    shouldRender: true,
  },
  {
    description: "adds background colour if it is a valid colour",
    input: { logoName: "Sun", textColour: "green", logoColour: "brown" },
    expectedKey: "logoColour",
    expectedValue: "brown",
  },
  {
    description: "adds text colour if it is a valid colour",
    input: { logoName: "Sun", textColour: "red", logoColour: "brown" },
    expectedKey: "textColour",
    expectedValue: "red",
  },
];

describe("Shape Test Suite", () => {
  for (const testCase of testCases) {
    it(testCase.description, () => {
      if (testCase.shouldRender) {
        const shape = new ShapeBlueprint(testCase.input);
        expect(() => shape.render()).toThrow(testCase.expectedError);
      } else if (testCase.expectedError) {
        const createShape = () => new ShapeBlueprint(testCase.input);
        expect(createShape).toThrow(testCase.expectedError);
      } else {
        const shape = new ShapeBlueprint(testCase.input);
        expect(shape[testCase.expectedKey]).toBe(testCase.expectedValue);
      }
    });
  }
});