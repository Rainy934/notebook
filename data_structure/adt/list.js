/**
 * 单链表ADT
 * class LinkList{
 *  <Boolean> MakeEmpty(<LinkList> list)
 *  <Boolean> isEmpty(<LinkList> list)
 *  <Boolean> isLast(<LinkList> p, <LinkList> list)
 *  <LinkList> find(<LinkList> list, <Int> data)
 *  <Boolean> delete(<LinkList> list, <Int> data)
 *  <LinkList> findPre(<LinkList> list, <Int> data)
 *  <Boolean> insert(<LinkList> list, <Int> data, <LinkList> p)
 * }
 */

// 数组实现（顺序存储）
function ArrayLinkList(arr) {
    _arr = arr
    this.MakeEmpty = () => {
        _arr = []
    }

    this.isEmpty = () => {
        return _arr.length === 0
    }

    this.isLast = (p) => {
        if (_arr.length > 0) {
            return _arr[_arr.length-1].data === p.data
        } else {
            return false
        }
    }

    this.find = (data) => {
        let ele
        for(let i = 0; i < _arr.length; i++) {
            if(_arr[i].data === data) {
                ele = _arr[i]
                break
            }
        }
        return ele
    }

    this.delete = (data) => {
        let restore = false
        for(let i = 0; i < _arr.length; i++) {
            if(restore) {
                _arr[i] = _arr[i+1]
            } else if(_arr[i].data === data) {
                _arr[i] = _arr[i+1]
                restore = true
            }
        }
        _arr.length = _arr.length - 1
    }
    this.insert = (ele, p) => {
        let restore = false, store = undefined
        for(let i = 0; i < _arr.length; i++) {
            if(restore) {
                let tmp = store
                store = _arr[i]
                _arr[i] = tmp
            } else if(i === p) {
                store = _arr[i]
                _arr[i] = ele
                restore = true
            }
        }
        _arr.push(store)
    }
    this.toString = () => {
        return JSON.stringify(_arr)
    }
}

// 链表实现（链式存储）单向链表

function LinkNode(data) {
    this.data = data
    this.link = null
}

function LinkList() {
    this.link = null
    this.MakeEmpty = () => {
        this.link = null
    }

    this.isEmpty = () => {
        return !this.link
    }

    this.isLast = (pNode) => {
        if(pNode.link) return false
        let node = this.link
        while(node) {
            node = node.link
        }
        return node === pNode
    }

    this.find = (data) => {
        let node = this.link, result = null
        while(node && !result) {
            if (node.data === data) {
                result = node
            }
            node = node.link
        }
        return result
    }

    this.delete = (data) => {
        let node = this.link, result = null,pre = null
        while(node && !result) {
            if (node.data === data) {
                result = node
            }
            pre = node
            node = node.link
        }
        pre.link = result.link
    }

    this.insert = (data, pNode) => {
        let node = this.link, result = null
        while(node && !result) {
            if (node.data === pNode.data) {
                result = node
            }
            node = node.link
        }
        let tmp = result.link
        result.link = new LinkNode(data)
        result.link.link = tmp
    }

    this.toString = () => {
        let node = this.link, result = []
        while(node) {
            result.push({data: node.data})
            node = node.link
        }
        return JSON.stringify(result)
    }
}

// 双向链表 双链表优化的一点在于简化了删除操作，无需记录前置节点，但是增加了空间的开销，同时删除和插入的开销增加一倍
function TLinkNode(data) {
    this.data = data
    this.pre = null
    this.next = null
}

function TLinkList() {
    this.next = null
    this.MakeEmpty = () => {
        this.next = null
    }

    this.isEmpty = () => {
        return !this.next
    }

    this.isLast = (pNode) => {
        if(pNode.next) return false
        let node = this.next
        while(node) {
            node = node.next
        }
        return node === pNode
    }

    this.find = (data) => {
        let node = this.next, result = null
        while(node && !result) {
            if (node.data === data) {
                result = node
            }
            node = node.next
        }
        return result
    }

    this.delete = (data) => {
        let node = this.next, result = null
        while(node && !result) {
            if (node.data === data) {
                result = node
                node.pre.next = node.next
            }
            node = node.next
        }
        return result
    }

    this.insert = (data, pNode) => {
        let node = this.next, result = null
        while(node && !result) {
            if (node.data === pNode.data) {
                result = node
            }
            node = node.next
        }
        let tmp = result.next
        result.next = new LinkNode(data)
        result.next.next = tmp
    }

    this.toString = () => {
        let node = this.next, result = []
        while(node) {
            result.push({data: node.data})
            node = node.next
        }
        return JSON.stringify(result)
    }
}

// 链表的应用 - 一元多项式表示
// P1 = 3 * x ^ 2 + 4 * x ^ 89 + 6; P2 = -1 + 3 * x ^ 99 + x

function Polynomial(coeffcient, index) {
    this.coeffcient = coeffcient
    this.index = index
    this.next = null
}

function MutiPoly() {
    this.next = null
    this.isEmpty = () => {
        return !this.next
    }
    this.last = () => {
        if(this.isEmpty()) return false
        let poly = this.next
        while(poly && poly.next) {
            poly = poly.next
        }
        return poly
    }
    this.push = (coeffcient, index) => {
        let poly = new Polynomial(coeffcient, index)
        if(this.last) {
            this.last.next = poly
        } else {
            this.next = poly
        }
    }
    this.find = (index) => {
        if(this.isEmpty()) return false
        let poly = this.next
        while(poly && poly.index !== index) {
            poly = poly.next
        }
        if (poly.index === index) {
            return poly
        } else {
            return null
        }
    }
}

MutiPoly.plus = (mutiPoly1, mutiPoly2) => {
    let result = new MutiPoly()
    let p = mutiPoly1.next
    while(p) {
        result.push(p.coeffcient, p.index)
        p = p.next
    }
    p = mutiPoly2.next
    while(p) {
        let found = result.find(p.index)
        if(found) {
            found.coeffcient = found.coeffcient + p.coeffcient
        } else {
            result.push(p.coeffcient, p.index)
        }
        p = p.next
    }
    return result
}

MutiPoly.substract = (mutiPoly1, mutiPoly2) => {
    let result = new MutiPoly()
    let p = mutiPoly1.next
    while(p) {
        result.push(p.coeffcient, p.index)
        p = p.next
    }
    p = mutiPoly2.next
    while(p) {
        let found = result.find(p.index)
        if(found) {
            found.coeffcient = found.coeffcient - p.coeffcient
        } else {
            result.push(-p.coeffcient, p.index)
        }
        p = p.next
    }
    return result
}

MutiPoly.muti = (mutiPoly1, mutiPoly2) => {
    let tmp = []
    let result = new MutiPoly()
    let p1 = mutiPoly1.next
    while(p1) {
        p2 = mutiPoly2.next
        while(p2) {
            tmp.push(p1.coeffcient * p2.coeffcient, p1.index + p2.index)
            p2 = p2.next
        }
        p1 = p1.next
    }
    for(let i = 0; i < tmp.length; i++) {
        let found = result.find(tmp[i].index)
        if(found) {
            found.coeffcient = found.coeffcient + p.coeffcient
        } else {
            result.push(p.coeffcient, p.index)
        }
    }
    return result
}

// 链表应用 - 基数排序数组实现

function getMax(arr) {
    let max = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
    }
    return (max+'').length
}

function baseSort(arr) {
    let length = getMax(arr)
    let buckets = []
    for(let i = 0; i < length; i++) {
        buckets = []
        for(let j = 0; j < arr.length; j++) {
            let index = Math.floor(arr[j] / Math.pow(10, i) % 10)
            if(buckets[index]) {
                buckets[index].push(arr[j])
            } else {
                buckets[index] = [arr[j]]
            }
        }
        console.log(buckets)
        arr = []
        for(let k = 0; k < buckets.length && buckets[k]; k++) {
            arr = arr.concat(buckets[k])
        }
    }
    return arr
}


