/**
 * Algorithm:
 * Start at root node or any starting node
 * Visit the node and mark it as visited
 * Recursively visit each adjacent unvisited node
 * Backtrack when no unvisited adjacent nodes are found
 * Continue until all nodes are visited
 */

import Graph from "../../../data-structures/graph/graph";

export const depthFirstSearch = (
  graph: Graph,
  start: number,
  target: number
): boolean => {
  const nodes = graph.nodes;
  const nodeMap = new Map(nodes.map((node) => [node.value, node]));

  const visited = new Set();

  const dfs = (current: number) => {
    if (visited.has(current)) return false;
    visited.add(current);

    if (current === target) return true;

    const currentNode = nodeMap.get(current);
    if (!currentNode || !currentNode.neighbors) return false;

    for (const neighbor of currentNode.neighbors) {
      if (neighbor && dfs(neighbor.value)) {
        return true;
      }
    }

    return false;
  };

  return dfs(start);
};
