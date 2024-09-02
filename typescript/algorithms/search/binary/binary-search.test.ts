import { binarySearch } from "./binary-search";

describe("Binary Search", () => {
  const sortedArray = [2, 4, 7, 10, 14, 18, 21, 25, 30, 35, 40];

  it("Should find a number in the array", () => {
    const result = binarySearch(10, sortedArray);
    expect(result).toBe(3);
  });

  it("Should find first number in the array", () => {
    const result = binarySearch(2, sortedArray);
    expect(result).toBe(0);
  });

  it("Should find a number in the array", () => {
    const result = binarySearch(40, sortedArray);
    expect(result).toBe(sortedArray.length - 1);
  });

  it("Should not find a number not in the array", () => {
    const result = binarySearch(15, sortedArray);
    expect(result).toBe(-1);
  });

  it("Should not break with empty array", () => {
    const result = binarySearch(15, []);
    expect(result).toBe(-1);
  });
});
