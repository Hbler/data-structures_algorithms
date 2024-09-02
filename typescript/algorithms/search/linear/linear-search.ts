/*
 * Algorithm:
 * Starting at the first element
 * Compare target value with each element
 * If target is found return its position/index
 * If target isn't found at the end of the list return an indicator
 * */

export const linearSearch = <T>(target: T, list: T[]): number => {
  for (let i = 0; i < list.length - 1; i++) {
    const value = list[i];

    if (target === value) return i;
  }

  return -1;
};
