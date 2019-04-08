function sum(a,b){
    
    if((typeof(a)==="number" && a!==Infinity)  && (typeof(b)==="number" && b!==Infinity)){
        let sum=a+b;
        return Number(sum.toFixed(1));
    }else{ return NaN;}
   
}
module.exports=sum;
console.log(sum(0.1,0.2));