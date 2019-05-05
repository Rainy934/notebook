// 插入排序
function insertion(arr, length) {
    let count = 0
    for(let p = 1; p < length; p++) {
        let insertData = arr[p]
        for(let j = p; j >= 0 ;j--) {
            count++
            if(arr[j-1] > insertData) {
                arr[j] = arr[j-1]
            } else {
                arr[j] = insertData
                break
            }
        }
    }
    console.log(count)
    return arr
}

// 希尔排序（缩小增量排序）
function shell(arr, length) {
    let count = 0
    for(let step = Math.floor(length / 2); step > 1; step = Math.floor(step / 2) ) {
        for(let p = step; p < length; p++) {
            let insertData = arr[p]
            for(let j = p; j >= step ;j = j - step) {
                count++
                if(arr[j-step] > insertData) {
                    arr[j] = arr[j-step]
                } else {
                    arr[j] = insertData
                    break
                }
            }
        }
    }
    console.log(count)
    return arr
}





// Test
arr = [1,3,4,5,2,3,32,45,23,565,6767,34,446878,21,323]

try {
    console.log(insertion(arr, arr.length))
    console.log('--------------------------')
    console.log(shell(arr, arr.length))
} catch (error) {
    console.log(error)
}