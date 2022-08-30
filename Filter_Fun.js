let a=[3,2,4,5,7,1,12,65,23,21]
//using filter function
let mul3=a.filter(function(element){
    return (element%3==0);
})
//without filter function
let totmul3=function(){
    var x=[]
    for (var i=0;i<a.length;i++){
        if (a[i]%3==0){
            x.push(a[i])
        }
        
    }
    return x;
}
console.log(mul3 )
console.log(totmul3())
