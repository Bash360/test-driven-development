function addInfinite(){
    let sum=0;
    if(arguments.length!==0){
    for(x=0;x<arguments.length;x++){
        if(typeof(arguments[x])!=="number" || arguments[x]===Infinity){
            return NaN
        }else{
sum+=arguments[x];}
    }
    return Number(sum.toFixed(1));
}{
    return "argument cannot be empty";
}
    }

module.exports=addInfinite;
