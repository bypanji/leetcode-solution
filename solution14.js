/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const lists = [[1,4,5],[1,3,4],[2,6]]

var mergeKLists = function(lists) {
    if (lists.length === 0) return null;

    const mergeTwoLists = (l1, l2) => {
        let dummy = new ListNode(0);
        let current = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        current.next = l1 || l2;
        return dummy.next;
    };

    while (lists.length > 1) {
        const mergedLists = [];
        for (let i = 0; i < lists.length; i += 2) {
            if (i + 1 < lists.length) {
                mergedLists.push(mergeTwoLists(lists[i], lists[i + 1]));
            } else {
                mergedLists.push(lists[i]);
            }
        }
        lists = mergedLists;
    }

    return lists[0];
};
