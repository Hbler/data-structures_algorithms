# Data Structures & Algorithms

Implementations of common data structures and algorithms in five languages: TypeScript, Python, Go, Rust, and Haskell.

TypeScript is the reference implementation. All other languages mirror the same structure.

## Structure

```
<lang>/
  data-structures/    Stack, Queue, LinkedList, Heap, Graph, BinaryTree
  algorithms/
    search/           Binary, Linear, BFS, DFS
    sorting/          Bubble, Insertion, Merge, Quick
    graph/            Dijkstra
```

## Running tests

```bash
# TypeScript
cd typescript && npm test

# Python
cd python && pytest

# Go
cd go && go test ./...

# Rust
cd rust && cargo test

# Haskell
cd haskell && stack test
```
