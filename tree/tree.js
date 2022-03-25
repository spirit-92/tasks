'use strict'
const countTree = 50;
let treePaint = ''
for (let i = 0;i<countTree;i++){

    for (let i2 = 0;i2<countTree;i2++){
        console.log(i2,i)
        let t1 = i;
        let t2 = i2
        if (i2>=25-i && i2<= 25+i){
            treePaint += '*'
        }else {
            treePaint +='_'
        }
    }
    treePaint += '\n'
}
console.log(treePaint)