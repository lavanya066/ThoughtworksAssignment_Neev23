let a=[3,2,4,5,7,1]
function multi(item, index, arr){
    arr[index]=item*10
}
// using mapping function 
a.forEach(multi)
// without using mapping function 
let a1=[3,2,4,5,7,1]
let totmul10=function(){
    
    for (let i=0;i<a1.length;i++){
        a1[i]=a1[i]*10;
    }
    
}
console.log(a )
totmul10()
console.log(a1)