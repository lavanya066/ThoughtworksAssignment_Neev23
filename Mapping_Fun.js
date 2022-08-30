let a=[3,2,4,5,7,1]
function multi(ele){
    return ele*10;
}
// using mapping function 
let mul10=a.map(multi)
// without using mapping function 
let totmul10=function(){
    let x=[]
    for (let i=0;i<a.length;i++){
        x.push(a[i]*10);
    }
    return x;
}
console.log(mul10 )
console.log(totmul10())