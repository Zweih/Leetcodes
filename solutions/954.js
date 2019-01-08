/**
 * 954. Array of Doubled Pairs
 * 
 * Execution time 172 ms, faster than 82.93% of JS submissions!
 * 
 * Difficulty: Medium
 * 
 * Given an array of integers A with even length, return true if and only if it is possible to reorder it such that A[2 * i + 1] = 2 * A[2 * i] for every 0 <= i < len(A) / 2.
 * 
 */


/**
 * @param {number[]} A
 * @return {boolean}
 */
const canReorderDoubled = (A) => {  
	const count = new Map();
	
	A.forEach((el) => {
		if(count.has(el)) {
			count.set(el, count.get(el) + 1);
		} else {
			count.set(el, 1);
		}
	});
	
	A = A.sort((a, b) => Math.abs(a) - Math.abs(b));
	
	for(let i = 0; i < A.length; i++) {
		const a1 = A[i];
		const a2 = A[i] * 2;
		
		if(count.get(a1) === 0) {
			continue;
		}
		
		if(!count.get(a2)) {
			return false;
		}
		
		count.set(a1, count.get(a1) - 1);
		count.set(a2, count.get(a2) - 1);
	}
	
	return true;
};