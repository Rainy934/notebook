// 获取随机数组，可能存在负数
function getRandomArr(N) {
    let arr = []
    for(let i = 0; i < N; i++) {
        let r = Math.random()
        if(r > 0.5) {
            arr.push(Math.ceil(r * 100))
        } else {
            arr.push(-Math.ceil(r * 100))
        }
    }
    return arr
}

// 求解最大子序列和 O(N3)
function getMax(arr) {
    let maxSum = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            let tSum = 0;
            for(let k = i; k <= j; k++) {
                tSum = tSum + arr[k]
            }
            if(tSum > maxSum) {
                maxSum = tSum
            }
        }
    }
    return maxSum
}

// 求解最大子序列和 O(N)
function getBestMax(arr) {
    let maxSum = thisSum =  0;
    for(let i = 0; i < arr.length; i++) {
        thisSum = thisSum + arr[i]
        if(thisSum > maxSum){
            maxSum = thisSum
        } else if(thisSum < 0) {
            thisSum = 0
        }
    }
    return maxSum
}

let arr = getRandomArr(1000000)

let start = Date.now()

// console.log(getMax(arr))
console.log(getBestMax(arr))

let end = Date.now()
console.log(end - start)


