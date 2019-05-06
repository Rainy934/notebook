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

// 链表实现（链式存储）

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


