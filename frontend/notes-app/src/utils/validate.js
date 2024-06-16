export const validateEmail = (email)=>
{
    const regex = /^[a-zA-Z_0-9]+@[a-zA-Z]+\.[a-z]{2,4}$/; 
    return regex.test(email);
};

export const initials=(name)=>{
    if(!name){
        return ""
    }
     const words=name.split(" ")
     let initial="";
     for(let i=0;i<Math.min(words.length,2);i++){
        initial+=words[i][0]
     }

     return initial.toUpperCase();
}
