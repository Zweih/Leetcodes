/**
 * 384. Shuffle an Array
 * 
 * Execution time 288 ms, faster than 93.02% of JS submissions!
 * 
 * Difficulty: Medium
 * 
 * Shuffle a set of numbers without duplicates.
 */

/**
 * @param {number[]} nums
 */
const Solution = function(nums) {
	this.current = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
	return this.current;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
	const dup = this.current.slice();

	for(let i = 0; i < dup.length; i++) {
		let temp = dup[i];
		let j = Math.floor(Math.random() * dup.length);
		dup[i] = dup[j];
		dup[j] = temp;
	}
	
	return dup;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */