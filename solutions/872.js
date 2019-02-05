/**
 * 872. Leaf-Similar Trees
 * 
 * Execution time 68 ms, faster than 100% of JS submissions!
 * 
 * Difficulty: Easy
 * 
 * Consider all the leaves of a binary tree. From left to right order, the values of those leaves form a leaf value sequence.
 * 
 * Two binary trees are considered leaf-similar if their leaf value sequence is the same.
 *  Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = (root1, root2) => {
	const seq1 = dfs(root1);
	
	return compareDfs(root2, [], seq1);
};

const dfs = (root, seq=[]) => {
	if(root.right || root.left) {
		if(root.right) {
			dfs(root.right, seq);
		}
		
		if(root.left) {
			dfs(root.left, seq);
		}
	} else {
		seq.push(root.val);
	}
	
	return seq;
};

const compareDfs = (root, seq, other) => {
	if(root.right || root.left) {
		if(root.right) {
			if(!compareDfs(root.right, seq, other)) {
				return false;
			};
		}
		
		if(root.left) {
			if(!compareDfs(root.left, seq, other)) {
				return false;
			}
		}
	} else {
		seq.push(root.val);
		
		if(root.val !== other[seq.length - 1]) {
			return false;
		}
	}
	
	return true;
}

