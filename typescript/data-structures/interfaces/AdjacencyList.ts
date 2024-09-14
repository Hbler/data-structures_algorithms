/***
 * Each node points to an array of connected nodes, represented by their values
 * Value are of T type which can be string, number, or symbol
 */
export type AdjacencyList<T extends string | number | symbol> = {
  [k in T]: T[];
};
