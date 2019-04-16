function git(username){
    const fetch=require("node-fetch"); 
    if(typeof(username)==="string"){
        
        filteredUsername=username.trim();
        if(filteredUsername.length===0){
            return "cannot be empty";
        }else{
            let url=`https://api.github.com/users/${filteredUsername}/repos?direction=${"desc"}`;
            fetch(url).then((response)=>{
                if(!response.ok){
         throw Error(response.statusText);
                }
                else{return response.json()}
            }
            ).then((data) => { return data }).catch((err) => { return err + " !!!";});
        }
        
    }
    else {
        return "not a string";
    }
}
 
module.exports=git;
