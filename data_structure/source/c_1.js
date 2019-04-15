// 获取随机数组
function getRandomArray(n) {
    let arr = []
    for(let i = 0; i < n; i++) {
        arr.push(Math.ceil(Math.random() * 500))
    }
    return arr
}

// 冒泡排序
function dealKIndex(k, arr) {
    for(let i = 0; i < k; i++) {
        for(let j = arr.length - 1; j > 0; j--) {
            if(arr[j] > arr[j-1]) {
                let ret = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = ret
            }
        }
    }
}

let arr = getRandomArray(20)
dealKIndex(10, arr)
console.log(arr.slice(0,10))
