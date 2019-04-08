function sub(a,b){
    let difference=a-b;
    if((typeof(a)==="number" && a!==Infinity || a===-Infinity)  && (typeof(b)==="number" && b!==Infinity || b===-Infinity)){
        
        return Number(difference.toFixed(1))
    }else{
        return NaN;
    }
    }
module.exports=sub;