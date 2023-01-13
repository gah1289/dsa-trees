/** TreeNode: node for a general tree. */

class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */

	sumValues(node = this.root, sum = 0) {
		if (!node) return sum;

		function childSumValues(node) {
			sum += node.val;
			if (node.children) {
				node.children.forEach((child) => {
					return childSumValues(child, sum);
				});
			}
			return sum;
		}

		return node.children ? childSumValues(node) : sum;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens(node = this.root, evenCount = 0) {
		if (!node) return evenCount;

		function childCountEvens(node) {
			if (node.val % 2 === 0) evenCount += 1;

			if (node.children) {
				node.children.forEach((child) => {
					return childCountEvens(child, evenCount);
				});
			}
			return evenCount;
		}

		return node.children ? childCountEvens(node) : evenCount;
	}

	/** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

	numGreater(lowerBound, node = this.root, nodeCount = 0) {
		// how can I DRY this?
		if (!node) return nodeCount;
		if (node.val > lowerBound) nodeCount += 1;

		if (node.children) {
			node.children.forEach((child) => {
				return childNumGreater(child, nodeCount);
			});
		}

		function childNumGreater(node) {
			if (node.val > lowerBound) nodeCount += 1;
			if (node.children) {
				node.children.forEach((child) => {
					return childNumGreater(child, nodeCount);
				});
			}
			return nodeCount;
		}
		return nodeCount;
	}
}

module.exports = { Tree, TreeNode };
