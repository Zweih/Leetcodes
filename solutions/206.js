/**
 * 206. Reverse Linked List
 * 
 * Execution time 56 ms, faster than 100% of JS submissions!
 * 
 * Difficulty: Easy
 * 
 * Reverse a singly linked list.
 * 
 * Example:
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * 
 * Follow up:
 * A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// iterative
const reverseList = (head) => {
	if(!head) {
		return null;
	}
	
	let current = head.next;
	let list = new ListNode(head.val);
	
	while(current) {
		const temp = list;
		list = new ListNode(current.val);
		list.next = temp;
		current = current.next;
	}
	
	return list;
};

// recursive
// const reverseList = (head, list=null) => {
// 	if(!head) {
// 		return list;
// 	}
	
// 	const temp = new ListNode(head.val);
// 	temp.next = list;
// 	list = temp;
	
//   return reverseList(head.next, list);
// }







