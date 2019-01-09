/**
 * 119. Pascal's Triangle II
 * 
 * Execution time 48 ms, faster than 100% of JS submissions!
 * 
 * Difficulty: Easy
 * 
 * Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
 * Note that the row index starts from 0.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 * 
 * Example:
 * Input: 3
 * Output: [1,3,3,1]
 * 
 * Follow up:
 * Could you optimize your algorithm to use only O(k) extra space?
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
	if(rowIndex === 0) {
		return [1];
	} else if(rowIndex === 1) {
		return [1, 1];
	}
	
	let prev = [1, 1];
	let curr = null;
	
	for(let i = 2; i <= rowIndex; i++) {
		curr = [1];
		
		for(let j = 1; j < prev.length; j++) {
			curr.push(prev[j - 1]+ prev[j]);
		}
		
		curr.push(1);
		prev = curr;
	}

	return curr;
};