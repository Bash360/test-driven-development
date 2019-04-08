function multiply(){
    let product=1;
    if(arguments.length!==0){
        for(x=0;x<arguments.length;x++){
            if(typeof(arguments[x])!=="number" || arguments[x]===Infinity){
                return NaN;
            }else{
    product*=arguments[x];
        }
       
    }
    return Number(product);
}{
        return "argument cannot be empty";
    }
        }
module.exports=multiply;