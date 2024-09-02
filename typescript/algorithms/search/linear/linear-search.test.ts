import { linearSearch } from "./linear-search";

describe("Linear Search", () => {
  describe("Numeric arrays", () => {
    const numberArray = [3, 8, 1, 5, 9, 12, 7, 2];

    it("Should find a number correctly", () => {
      const result = linearSearch<number>(5, numberArray);
      expect(result).toBe(3);
    });

    it("Should return -1 if a number isn't found", () => {
      const result = linearSearch<number>(10, numberArray);
      expect(result).toBe(-1);
    });
  });
  describe("String arrays", () => {
    const stringArray = ["apple", "banana", "cherry", "date", "fig", "grape"];

    it("Should find a string correctly", () => {
      const result = linearSearch<string>("cherry", stringArray);
      expect(result).toBe(2);
    });

    it("Should return -1 if a string isn't found", () => {
      const result = linearSearch<string>("kiwi", stringArray);
      expect(result).toBe(-1);
    });
  });
});
