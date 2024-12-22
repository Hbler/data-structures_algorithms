/**
 * Start at the root node (or any starting node).
 * Visit the node, mark it as visited, and enqueue it.
 * While the queue is not empty:
 *   - Dequeue a node.
 *   - Visit all its adjacent unvisited nodes, mark them as visited, and enqueue them.
 * Repeat until all nodes are visited.
 */

import Graph from "../../../data-structures/graph/graph";

export const breadthFirstSearch = (
  graph: Graph,
  start: number,
  target: number
): boolean => {
  const queue = [];
  const nodes = graph.getNodes();
  const nodeMap = new Map(nodes.map((node) => [node.value, node]));

  const visited: Set<number> = new Set();

  const startingNode = nodeMap.get(start);
  if (!startingNode) return false;

  queue.push(startingNode);
  visited.add(startingNode.value);

  while (queue.length > 0) {
    const current = queue.shift();
    const currentValue = current?.value;

    if (currentValue === target) return true;
    if (!current || !current.neighbors) continue;

    for (const neighbor of current.neighbors) {
      if (!visited.has(neighbor.value)) {
        visited.add(neighbor.value);
        queue.push(neighbor);
      }
    }
  }

  return false;
};
