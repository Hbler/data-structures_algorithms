import { AdjacencyList } from "../interfaces/AdjacencyList";
import { AdjacencyMatrix } from "../interfaces/AdjacencyMatrix";
import { GraphNode } from "../interfaces/Node";

class Graph {
  constructor() {}

  static adjacencyListToAdjacencyMatrix(
    list: AdjacencyList<number>
  ): AdjacencyMatrix<number> {
    const nodeNeighbors = Object.values(list);

    const matrix = new Array(nodeNeighbors.length)
      .fill(0)
      .map(() => new Array(nodeNeighbors.length).fill(0));

    nodeNeighbors.forEach((neighborsArr, index) => {
      const nodeRow = matrix[index];
      if (neighborsArr.length > 0) {
        neighborsArr.forEach((neighborValue) => {
          nodeRow[neighborValue - 1] = 1;
        });
      }
    });

    return matrix;
  }

  static ajacencyMatrixToAdjacencyList(
    list: AdjacencyMatrix<number>
  ): AdjacencyList<number> {
    const adjacencyList: AdjacencyList<number> = {};

    list.forEach((row, i) => {
      adjacencyList[i + 1] = [];

      row.forEach((val, j) => {
        if (val === 1) adjacencyList[i + 1].push(j + 1);
      });
    });

    return adjacencyList;
  }

  static fromNumericAdjacencyList(
    list: AdjacencyList<number>
  ): GraphNode<number>[] {
    // easy lookup
    const nodesMap: { [key: number]: GraphNode<number> } = {};

    // create the nodes first
    Object.keys(list).forEach((value) => {
      const nodeValue = Number(value);

      const graphNode = { value: nodeValue, neighbors: [] };
      nodesMap[nodeValue] = graphNode;
    });

    // connect nodes based on adjacency list
    Object.entries(list).forEach(([node, neighbors]) => {
      const nodeValue = Number(node);
      const currentNode = nodesMap[nodeValue];

      if (neighbors.length > 0 && currentNode.neighbors) {
        const neighborsArray = currentNode.neighbors;

        neighbors.forEach((value: number) => {
          neighborsArray.push(nodesMap[value]);
        });
      }
    });

    return Object.values(nodesMap);
  }
}

export default Graph;
