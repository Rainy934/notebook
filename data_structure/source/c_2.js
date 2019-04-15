const chars = [
    ['a', 'f', 'v', 'g', 'l'],
    ['h', 'a', 't', 'e', 'u'],
    ['q', 'c', 'f', 'b', 'c'],
    ['i', 'f', 'u', 'c', 'k'],
    ['d', 'v', 'e', 'r', 'y']
]

const words = ['luck', 'very', 'facf', 'fvgl', 'hate']

function calcMatchWords() {
    let twords = [];
    for(let i = 0; i < chars.length; i++) {
        for(let j = 0; j < chars[i].length; j++) {
            if (chars[i+3] && chars[i+3][j]) {
                let word = chars[i][j] + chars[i+1][j] + chars[i+2][j] + chars[i+3][j]
                twords.push(word)
            }
            if (chars[i] && chars[i][j+3]) {
                let word = chars[i][j] + chars[i][j+1] + chars[i][j+2] + chars[i][j+3]
                twords.push(word)
            }
            if (chars[i+3] && chars[i+3][j+3]) {
                let word = chars[i][j] + chars[i+1][j+1] + chars[i+2][j+2] + chars[i+3][j+3]
                twords.push(word)
            }
        }
    }
    twords.forEach(function(word){
        if(words.indexOf(word) > -1) {
            console.log(word)
        }
    })
}

calcMatchWords()