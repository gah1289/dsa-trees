/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	constructor(root = null) {
		this.root = root;
	}

	/** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

	minDepth(node = this.root) {
		let nodesLength = 0;
		if (!node) return nodesLength;
		// count the root as a node
		nodesLength += 1;

		function minDepthChildren(node) {
			// if you reach a leaf, return nodesLength
			if (node.left === null && node.right === null) {
				return nodesLength;
			}
			if (node.left === null) {
				nodesLength += 1;
				return minDepthChildren(node.right);
			}
			if (node.right === null) {
				nodesLength += 1;
				return minDepthChildren(node.left);
			}
			else {
				nodesLength += 1;
				return Math.min(minDepthChildren(node.left), minDepthChildren(node.right));
			}
		}
		return minDepthChildren(node);
	}

	/** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

	maxDepth(node = this.root) {
		let nodesLength = 0;
		if (!node) return nodesLength;

		if (node.left === null && node.right === null) {
			return (nodesLength += 1);
		}
		else {
			maxDepthChildren(node);
		}

		function maxDepthChildren(node) {
			if (node.left === null && node.right === null) {
				return (nodesLength += 1);
			}
			if (node.left === null && node.right) {
				return maxDepthChildren(node.right);
			}
			else if (node.left && node.right === null) {
				return maxDepthChildren(node.left);
			}
			else return maxDepthChildren(node.left), maxDepthChildren(node.right);
		}

		return nodesLength;
	}

	/** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

	maxSum() {
		// ask Rahul to clarify
		let sum = 0;
		function getMaxSum(node) {
			if (node === null) return 0;
			const traverseLeft = getMaxSum(node.left);
			const traverseRight = getMaxSum(node.right);
			sum = Math.max(sum, node.val + traverseLeft + traverseRight);
			return Math.max(0, node.val + traverseLeft, node.val + traverseRight);
		}
		getMaxSum(this.root);
		return sum;
	}

	/** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

	nextLarger(lowerBound) {
		let queue = [];

		function putSmallestValInQueue(nodeVal) {
			// if nodeVal is greater than lowerBound push nodeVal to queue if empty
			if (nodeVal > lowerBound) {
				if (!queue.length) {
					queue.push(nodeVal);
				}
				if (nodeVal < queue[0]) {
					// if nodeVal is less than whatever is in the queue, replace whatever is in the queue with nodeVal
					queue.pop();
					queue.push(nodeVal);
				}
			}
		}

		function traverseTree(node) {
			// start at root. If tree is empty, return null
			if (!node) return null;

			// compare value in queue with node.val. Put the smallest value in the queue
			putSmallestValInQueue(node.val);

			// if no node.left and no node.right, stop traversing
			if (node.left === null && node.right === null) {
				return;
			}
			// if only node.right, traverse to node.right
			if (node.left === null) {
				return traverseTree(node.right);
			}
			// if only node.left, traverse to node.left
			if (node.right === null) {
				return traverseTree(node.left);
			}
			else if (node.left && node.right) {
				// if node.right and node.left, traverse node.right and node.left
				return traverseTree(node.left), traverseTree(node.right);
			}
		}
		traverseTree(this.root);
		return queue.length ? queue[0] : null;
	}

	// traverseTree(node.left), traverseTree(node.right)

	/** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

	// areCousins(node1, node2) {}

	/** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

	// static serialize() {}

	/** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

	// static deserialize() {}

	/** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

	// lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
