// 栈实现
function Stack() {
    arr = []
    this.push = function(val) {
        arr.push(val)
    }
    this.pop = function() {
        return arr.pop()
    }
}

// 栈结构解决括号组检查
 function check(str) {
    let chars = str.split('')
    let stack = new Stack()
    let error = false
    for(let i = 0; i < chars.length; i++) {
        let char = chars[i]
        if(char === '[') {
            stack.push(char)
            continue
        }
        if(char === ']') {
            let tc = stack.pop()
            if(tc !== '[') {
                error = true
                break
            }
            continue
        }
        if(char === '{') {
            stack.push(char)
            continue
        }
        if(char === '}') {
            let tc = stack.pop()
            if(tc !== '{') {
                error = true
                break
            }
            continue
        }
        if(char === '(') {
            stack.push(char)
            continue
        }
        if(char === ')') {
            let tc = stack.pop()
            if(tc !== '(') {
                error = true
                break
            }
            continue
        }
    }
    if(stack.pop()) {
        error = true
    }
    if(error) {
        console.log('ERROR')
    } else {
        console.log('BINGO')
    }
 }

 check('{12366}()677')