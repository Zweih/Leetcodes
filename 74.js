/*
  74. Search a 2D Matrix
  
  Execution time 52 ms, faster than 100% of JS submissions!
  
  Difficulty: Medium

  Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
    - Integers in each row are sorted from left to right.
    - The first integer of each row is greater than the last integer of the previous row.
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
	if(matrix.length < 1) {
		return false;
	}

	// find row in range
	let row = 0;

	while(row + 1 < matrix.length && matrix[row + 1][0] <= target) {
		row++;
	}

	// binary search on row and return if found or not
	return bSearch(matrix[row], target);
};

const bSearch = (arr, target) => {  
	if(arr.length > 1) {
		const mid = Math.floor(arr.length / 2)

		if(target === arr[mid]) {
			return true;
		} else if(target > arr[mid]) {
			return bSearch(arr.slice(mid + 1), target);
		} else {
			return bSearch(arr.slice(0, mid), target);
		}
	}

	return arr[0] === target;
};
