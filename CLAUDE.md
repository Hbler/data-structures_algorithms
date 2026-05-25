# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# TypeScript — run from typescript/
npm test
npx jest algorithms/search/breadth-first/bfs.test.ts   # single file

# Python — run from python/
pytest
pytest data_structures/graph/test_graph.py              # single file

# Go — run from go/
go test ./...
go test ./algorithms/search/binary/...                  # single package

# Rust — run from rust/
cargo test
cargo test data_structures::graph                       # single module

# Haskell — run from haskell/
stack test
```

## Structure

Each language has its own top-level directory mirroring the same layout:

```
<lang>/
  data-structures/    # Stack, Queue, LinkedList, Heap, Graph, BinaryTree
  algorithms/
    search/           # Binary, Linear, BFS, DFS
    sorting/          # Bubble, Insertion, Merge, Quick
    graph/            # Dijkstra
```

File naming follows each language's convention: `kebab-case.ts` (TypeScript), `snake_case.py` (Python), `snake_case.go` (Go), `snake_case.rs` (Rust), `PascalCase.hs` (Haskell). Test files are colocated with implementations in all languages except Rust, where tests live in `#[cfg(test)]` modules inside the same file.

## TypeScript architecture

`typescript/` is the reference implementation. All code lives under `typescript/`. Each implementation file has a colocated `.test.ts` file.

`data-structures/interfaces/` defines the shared primitives:
- `Node.ts` — `GraphNode<T>` and `BinaryNode<T>` interfaces
- `AdjacencyList.ts`, `AdjacencyMatrix.ts`, `EdgeList.ts` — the three graph input formats

`Graph` (in `data-structures/graph/graph.ts`) accepts any of the three representations in its constructor and normalizes them into an internal `GraphNode<number>[]`. Type detection is done at runtime via private type guard methods. The class is currently hardcoded to `number` values only, despite the generic interfaces.

`BinaryTree` (in `data-structures/trees/binary.ts`) is a BST supporting insert and inorder/preorder/postorder traversal. It uses `BinaryNode<number>` internally via a private `BinaryTreeNode` class.

`algorithms/search/bfs.ts` and `dfs.ts` import `Graph` directly and share the same signature: `(graph: Graph, start: number, target: number) => boolean`. The sorting algorithms and `algorithms/graph/dijkstra` have no dependency on the `Graph` class.

## Language-specific notes

**Go** (`go/go.mod` module name: `dsa`): each directory is its own package. The package name is declared in the file — e.g. `linked_list/` uses `package linkedlist` (no underscore, Go convention).

**Rust** (`rust/`): module hierarchy is wired in `src/lib.rs` → `src/data_structures/mod.rs` / `src/algorithms/mod.rs` → nested `mod.rs` files. Leaf `.rs` files contain implementations with inline `#[cfg(test)]` test modules.

**Haskell** (`haskell/`): Stack-based project (`stack.yaml` + `package.yaml`). Modules follow `DataStructures.Graph`, `Algorithms.Search.BFS` naming. Entry point for tests is `test/Spec.hs`.
