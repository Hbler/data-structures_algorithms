import { AdjacencyList } from "../../data-structures/interfaces/AdjacencyList";
import { AdjacencyMatrix } from "../../data-structures/interfaces/AdjacencyMatrix";
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

  it("Should correctly convert Adjacency List to Adjacency Matrix", () => {
    const result = Graph.adjacencyListToAdjacencyMatrix(adjacencyList);
    expect(result).toEqual(adjacencyMatrix);
  });

  it("Should correctly convert Adjacency Matrix to Adjacency List", () => {
    const result = Graph.ajacencyMatrixToAdjacencyList(adjacencyMatrix);
    expect(result).toEqual(adjacencyList);
  });
});
