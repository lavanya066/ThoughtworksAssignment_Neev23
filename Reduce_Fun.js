
// return the sum of non duplicate elements
let a=[1,2,3,4,1,1,3,3,6,5,4,4,9]
var s=0
var s1=0
//with reduce function
const sumdup=a.reduce(function(acc,cur){
    if(acc.indexOf(cur)===-1){
        acc.push(cur)
        s+=cur
    }
    return acc
},[])
const sumtot=function(){
    var h={}
    
    for (var i=0;i<a.length;i++){
        if(! Object.hasOwn(h, a[i])){
            h[a[i]]=1
            s1+=a[i]
        }

    }
}
sumdup
sumtot()
console.log(s)
console.log(s1)