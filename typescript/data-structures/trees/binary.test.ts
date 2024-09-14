import { BinaryTree } from "./binary";

describe("Binary Tree", () => {
  const tree = new BinaryTree();
  tree.insert(4);
  tree.insert(2);
  tree.insert(6);
  tree.insert(1);
  tree.insert(3);
  tree.insert(5);
  tree.insert(7);

  it("Should correctly implement Inorder Traversal", () => {
    const inorderArray = [1, 2, 3, 4, 5, 6, 7];
    expect(tree.inorder()).toEqual(inorderArray);
  });
  it("Should correctly implement Preorder Traversal", () => {
    const preorderArray = [4, 2, 1, 3, 6, 5, 7];
    expect(tree.preorder()).toEqual(preorderArray);
  });
  it("Should correctly implement Postorder Traversal", () => {
    const postorderArray = [1, 3, 2, 5, 7, 6, 4];
    expect(tree.postorder()).toEqual(postorderArray);
  });
});
