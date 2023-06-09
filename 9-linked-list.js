class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const node = new Node(data);

        if (this.tail) {
            this.tail.next = node;
        }
        if (!this.head) {
            this.head = node;
        }
        this.tail = node;
    }

    prepend(data) {
        const node = new Node(data, this.head);
        this.head = node;
        if (!this.tail) {
            this.head = node;
        }
    }

    toArray() {
        const output = [];
        let current = this.head;
        while (current) {
            output.push(current.data);
            current = current.next;
        }
        return output;
    }

    findNode(data) {
        if (!this.head) {
            console.warn("This linked list is empty");
        }
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
    }

    addAfter(prevNodeData, curNodeData) {
        const prevNode = this.findNode(prevNodeData);
        if (!prevNode) {
            return;
        }
        const node = new Node(curNodeData, prevNode.next);
        prevNode.next = node;
        return node;
    }

    remove(data) {
        if (!this.head) {
            return;
        }
        while (this.head && this.head.data === data) {
            this.head = this.head.next;
        }
        let current = this.head;

        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
        if (this.tail.data === data) {
            this.tail = current;
        }
        return this.toArray();
    }
}

const list = new LinkedList();
list.append("Hello!");
list.prepend("Hello!");
list.append("World!");
// console.log(list.toArray());
// console.log(list.findNode("Hello!"));
// console.log(list.addAfter("Hello!", "Oh!"));
console.log(list.remove("Hello!"));
