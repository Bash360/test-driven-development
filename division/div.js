function divide(a,b){
    if((typeof(a)==="number" && a!==Infinity)  && (typeof(b)==="number" && b!==Infinity)){
        if(b===0){
            return "cant divide by zero";
        }
        else{
        return Number(a/b); }
    }
    else{
    return NaN;
}}
module.exports=divide;
