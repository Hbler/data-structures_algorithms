export interface GraphNode<T> {
  neighbors?: GraphNode<T>[];
  value: T;
}

export interface BinaryNode<T> {
  right: BinaryNode<T> | null;
  left: BinaryNode<T> | null;
  value: T;
}
