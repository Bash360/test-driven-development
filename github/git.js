function git(username){
    const fetch=require("node-fetch");
    
    if(typeof(username)==="string"){
        username.trim();
        if(username.length===0){
            return "cannot be empty";
        }else{
            let url=`https://api.github.com/users/${username}/repos?direction=${"desc"}`;
    fetch(url).then(function(response,status){
    return response.json();
    }).then(function(response){
        return response;
    });
        }
        
    }
    else{return "not a string";}
}
 
module.exports=git;
