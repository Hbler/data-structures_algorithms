import { BinaryNode } from "../interfaces/Node";

class BinaryTreeNode implements BinaryNode<number> {
  left: BinaryNode<number> | null;
  right: BinaryNode<number> | null;
  value: number;

  constructor(value: number) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

export class BinaryTree {
  root: BinaryTreeNode | null = null;

  insert(value: number): void {
    const newNode = new BinaryTreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: BinaryTreeNode, newNode: BinaryTreeNode): void {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inorder(node: BinaryTreeNode | null = this.root): number[] {
    const values: number[] = [];

    if (node !== null) {
      values.push(...this.inorder(node.left));
      values.push(node.value);
      values.push(...this.inorder(node.right));
    }
    return values;
  }

  preorder(node: BinaryTreeNode | null = this.root): number[] {
    const values: number[] = [];
    if (node !== null) {
      values.push(node.value);
      values.push(...this.preorder(node.left));
      values.push(...this.preorder(node.right));
    }
    return values;
  }

  postorder(node: BinaryTreeNode | null = this.root): number[] {
    const values: number[] = [];
    if (node !== null) {
      values.push(...this.postorder(node.left));
      values.push(...this.postorder(node.right));
      values.push(node.value);
    }
    return values;
  }
}
