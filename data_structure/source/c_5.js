// 表实现 - 链表实现
class LinkNode {
    constructor (data) {
        this.next = null
        this.data = data
    }
}

class LinkList {
    constructor () {
        this.head = new LinkNode()
    }

    clear () {
        this.head.next = null
    }

    isEmpty () {
        return !!this.head.next
    }

    isLast (node) {
        if (this.isEmpty()) return false
        let pNode = this.head.next
        while (pNode.next !== null) {
            pNode = pNode.next
        }
        return pNode === node
    }

    find (data) {
        if (this.isEmpty()) return null
        let pNode = this.head.next
        while (pNode.data !== data && pNode.next !== null) {
            pNode = pNode.next
        }
        if (pNode.data === data) {
            return pNode
        } else {
            return null
        }
    }

    delete (data) {
        let pNode = this.find(data)
        if (pNode) {
            let next = pNode.next
            let pre = pNode.getPre()
            pre.next = next
        }
    }
}

