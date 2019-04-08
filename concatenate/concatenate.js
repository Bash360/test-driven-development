function concatenate(firstString,secondString){
   
    if(typeof(firstString)==="string" && typeof(secondString)==="string"){
        firstString=firstString.trim();
        secondString=secondString.trim();
        let concatenatedString= firstString.concat(secondString);
        if(concatenatedString.length===0){
            return "cannot be empty";
        }else{
            return concatenatedString;
        }
        
    }
    else{return "not a string";}
}
module.exports=concatenate;