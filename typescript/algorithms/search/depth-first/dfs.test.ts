import Graph from "../../../data-structures/graph/graph";
import { AdjacencyList } from "../../../data-structures/interfaces/AdjacencyList";
import { EdgeList } from "../../../data-structures/interfaces/EdgeList";
import { depthFirstSearch } from "./dfs";

describe("Depth First Search", () => {
  const binaryTreeEdgeList: EdgeList<number> = [
    [1, 2],
    [1, 3],
    [2, 4],
    [2, 5],
    [3, 6],
  ];

  const binaryTreeGraph = new Graph(binaryTreeEdgeList);

  it("Should find starting node", () => {
    expect(depthFirstSearch(binaryTreeGraph, 1, 1));
  });
  it("Should find a path to existing node", () => {
    expect(depthFirstSearch(binaryTreeGraph, 1, 6));
  });
  it("Should not find a path to non-existing node", () => {
    expect(!depthFirstSearch(binaryTreeGraph, 1, 7));
  });
  it("Should not find a path to nodes that aren't connected", () => {
    expect(!depthFirstSearch(binaryTreeGraph, 2, 6));
  });
});
