// Basic Singly Linked List
class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }

    appendToTail(d) {
        let end = new Node(d);
        let n = this;
        while (n.next !== null) {
            n = n.next;
        }
        n.next = end;
    }

    deleteNode(head, d) {
        if (head === null) return null;

        // find previous node prev and set
        // prev.next = n.next

        let n = head;

        if (n.data === d) {
            return head.next; // moved head
        }

        while (n.next) {
            if (n.next.data === d) {
                n.next = n.next.next;
                return head; // head didnt change
            }
            n = n.next;
        }
        return head;
    }
}


export default Node;