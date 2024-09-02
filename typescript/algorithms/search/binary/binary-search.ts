/*
 * Algorithm:
 * Set two pointers at the start and at the end of a sorted array
 * Calculate the mdiddle index
 * If the target equals the middle element, return it's index
 * If the target is less than the middle, move end pointer to middle - 1
 * If the target is greater, move ther start pointer to middle + 1
 * Repeat process until pointers cross, if no
 * If target isn't found return an indicator
 * */

// edge case: target value has multiple occurences, return the first occurrence
const validateIndex = (
  target: number,
  list: number[],
  index: number
): string => {
  const value = list[index];

  if (index !== 0 && list[index - 1] === target) {
    return "before";
  } else if (value === target) {
    return "match";
  } else if (target < value) {
    return "before";
  } else {
    return "after";
  }
};

export const binarySearch = (target: number, list: number[]): number => {
  // edge case, list empty
  if (list.length === 0) return -1;

  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const validation = validateIndex(target, list, middle);

    // target equals middle value
    if (validation === "match") {
      return middle;
    }
    // target is lesser than middle value, or isn't first occurrence
    else if (validation === "before") {
      end = middle - 1;
    }
    // target is greater than middle value
    else if (validation === "after") {
      start = middle + 1;
    }
  }

  // target not found, return indicator
  return -1;
};
