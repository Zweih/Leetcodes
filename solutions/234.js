/**
 * 234. Palindrome Linked List
 *
 * Execution time 48 ms, faster than 99.64% of JS submissions!
 *
 * Memory usage 39.3 MB, less than 91.67% of JS submissions!
 * 
 * O(n) time and O(1) space.
 * 
 * Difficulty: Easy
 * 
 * Given a singly linked list, determine if it is a palindrome.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const reverseList = (list) => {
  let prev = null;
  let next = null;

  while (list) {
    next = list.next;
    list.next = prev;
    prev = list;
    list = next;
  }

  return prev;
};

const splitList = (head) => {
  let fast = head;
  let slow = head;
  let slowPrev = head;

  if (head && head.next) {
    while (fast && fast.next) {
      fast = fast.next.next;
      slowPrev = slow;
      slow = slow.next;
    }

    if (fast) {
      slow = slow.next;
    }
  }

  slowPrev.next = null;

  return reverseList(slow);
};

const compareLists = (secondHalf, firstHalf) => {
  while (firstHalf || secondHalf) {
    if (firstHalf.val !== secondHalf.val) {
      return false;
    }

    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  if (!head) return null;
  
  return compareLists(splitList(head), head);
};
