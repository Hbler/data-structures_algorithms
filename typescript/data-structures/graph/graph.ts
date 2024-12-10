import { AdjacencyList } from "../interfaces/AdjacencyList";
import { AdjacencyMatrix } from "../interfaces/AdjacencyMatrix";
import { EdgeList } from "../interfaces/EdgeList";
import { GraphNode } from "../interfaces/Node";

type GraphStarter =
  | AdjacencyList<number>
  | AdjacencyMatrix<number>
  | EdgeList<number>;
class Graph {
  nodes: GraphNode<number>[] = [];

  constructor(starter?: GraphStarter) {
    if (starter) {
      if (this.isAdjacencyList(starter)) {
        this.nodes = Graph.fromAdjacencyList(starter);
      } else if (this.isEdgeList(starter)) {
        this.nodes = Graph.fromEdgeList(starter);
      } else if (this.isAdjacencyMatrix(starter)) {
        this.nodes = Graph.fromAdjacencyMatrix(starter);
      }
    }
  }

  // access
  [Symbol.iterator]() {
    return this.nodes[Symbol.iterator]();
  }

  getNodes(): GraphNode<number>[] {
    return this.nodes;
  }

  get(index: number): GraphNode<number> | undefined {
    return this.nodes[index];
  }

  get length(): number {
    return this.nodes.length;
  }

  // type validators
  private isAdjacencyList(
    starter: GraphStarter
  ): starter is AdjacencyList<number> {
    return (
      typeof starter === "object" && Object.values(starter)[0] instanceof Array
    );
  }
  private isAdjacencyMatrix(
    starter: GraphStarter
  ): starter is AdjacencyMatrix<number> {
    return Array.isArray(starter) && Array.isArray(starter[0]);
  }
  private isEdgeList(starter: GraphStarter): starter is EdgeList<number> {
    return (
      Array.isArray(starter) &&
      Array.isArray(starter[0]) &&
      starter[0].length === 2
    );
  }

  // constructor methods

  static fromAdjacencyList(list: AdjacencyList<number>): GraphNode<number>[] {
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

  static fromAdjacencyMatrix(
    matrix: AdjacencyMatrix<number>
  ): GraphNode<number>[] {
    const nodeMap: { [key: number]: GraphNode<number> } = {};

    matrix.forEach((_, i) => {
      nodeMap[i + 1] = { value: i + 1, neighbors: [] };
    });

    for (let y = 0; y < matrix.length; y += 1) {
      const row = matrix[y];
      for (let x = 0; x < row.length; x += 1) {
        const isConnected = row[x] === 1;

        if (isConnected) {
          nodeMap[y + 1].neighbors?.push(nodeMap[x + 1]);
        }
      }
    }

    return Object.values(nodeMap);
  }

  static fromEdgeList(list: EdgeList<number>): GraphNode<number>[] {
    const nodeMap: { [key: number]: GraphNode<number> } = {};

    list.forEach(([from, to]) => {
      if (!nodeMap[from]) {
        nodeMap[from] = { value: from, neighbors: [] };
      }
      if (!nodeMap[to]) {
        nodeMap[to] = { value: to, neighbors: [] };
      }
    });

    list.forEach(([from, to]) => {
      nodeMap[from].neighbors?.push(nodeMap[to]);
      // Uncomment the next line for an undirected graph
      // nodeMap[to].neighbors.push(nodeMap[from]);
    });

    return Object.values(nodeMap);
  }

  // conversions
  // TODO: extract from class

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
}

export default Graph;
