/**
  297. Serialize and Deserialize Binary Tree
  
  Execution time 88 ms, faster than 99.67% of JS submissions!
  
  Difficulty: Hard

    Serialization is the process of converting a data structure or object into a
  sequence of bits so that it can be stored in a file or memory buffer, or 
  transmitted across a network connection link to be reconstructed later in the 
  same or another computer environment.

    Design an algorithm to serialize and deserialize a binary tree. There is no 
  restriction on how your serialization/deserialization algorithm should work. 
  You just need to ensure that a binary tree can be serialized to a string and 
  this string can be deserialized to the original tree structure.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = (root, serial=[]) => {
  if(root !== null) {
    serial.push(root.val);
    serial = serialize(root.left, serial);
    serial = serialize(root.right, serial);
  } else {
    serial.push(null);
  }
  
  return serial;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data) => {
  if(data[0] !== null) {
    const root = new TreeNode(data[0]);
    data.shift();
    root.left = deserialize(data);
    root.right = deserialize(data)

    return root;
  } else {
    data.shift();
    return null;
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
