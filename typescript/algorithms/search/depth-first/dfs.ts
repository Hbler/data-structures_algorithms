/**
 * Algorithm:
 * Start at root node or any starting node
 * Visit the node and mark it as visited
 * Recursively visit each adjacent unvisited node
 * Backtrack when no unvisited adjacent nodes are found
 * Continue until all nodes are visited
 */

import Graph from "../../../data-structures/graph/graph";
import { GraphNode } from "../../../data-structures/interfaces/Node";

export const depthFirstSearch = (
  graph: Graph,
  start: number,
  target: number
) => {};
