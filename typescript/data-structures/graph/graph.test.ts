import { AdjacencyList } from "../../data-structures/interfaces/AdjacencyList";
import { AdjacencyMatrix } from "../../data-structures/interfaces/AdjacencyMatrix";
import { EdgeList } from "../interfaces/EdgeList";
import Graph from "./graph";

describe("Graphs", () => {
  const adjacencyList: AdjacencyList<number> = {
    1: [2, 3],
    2: [4, 5],
    3: [6],
    4: [],
    5: [6],
    6: [],
  };

  const adjacencyMatrix: AdjacencyMatrix<number> = [
    [0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
  ];

  const edgeList: EdgeList<number> = [
    [1, 2],
    [1, 3],
    [2, 4],
    [2, 5],
    [3, 6],
    [5, 6],
  ];

  it("Should generate the same Graph even if the sources vace different interfaces", () => {
    const graphfromAdjacencyList = Graph.fromAdjacencyList(adjacencyList);
    const graphfromAdjacencyMatrix = Graph.fromAdjacencyMatrix(adjacencyMatrix);
    const graphfromEdgeList = Graph.fromEdgeList(edgeList);

    expect(graphfromAdjacencyList).toEqual(graphfromAdjacencyMatrix);
    expect(graphfromAdjacencyMatrix).toEqual(graphfromEdgeList);
    expect(graphfromEdgeList).toEqual(graphfromAdjacencyList);
  });

  it("Should correctly convert Adjacency List to Adjacency Matrix", () => {
    const result = Graph.adjacencyListToAdjacencyMatrix(adjacencyList);
    expect(result).toEqual(adjacencyMatrix);
  });

  it("Should correctly convert Adjacency Matrix to Adjacency List", () => {
    const result = Graph.ajacencyMatrixToAdjacencyList(adjacencyMatrix);
    expect(result).toEqual(adjacencyList);
  });
});
