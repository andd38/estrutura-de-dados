/* function validatePassword(string){
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return regex.test(string);
} */
function hasLetter(str){
    for (let i = 0; i < str.length; i++) {
        if((str[i] >= 'a' && str[i]<='z')||(str[i] >= 'A' && str[i]<='Z')){
            return true;
        }
        
    }
    return false;
}

function hasNumber(str){
    for (let i = 0; i < str.length; i++) {
        if(str[i] >= '0' && str[i]<='9'){
            return true;
        }
        
    }
    return false;
}
function hasSpecialCharacter(str){
    for (let i = 0; i < str.length; i++) {
        if(str[i] === '@' || str[i]==='#' || str[i]==="&"){
            return true;
        }
        
    }
    return false;
}

function validatePassword(str){
    if(str.length <8){
        return false
    }
    if(!hasLetter(str)){
        return false;
    }
    if(!hasNumber(str)){
        return false;
    }
    if(!hasSpecialCharacter(str)){
        return false;
    }
    return true;


}


console.log(validatePassword("Andre@Patriarca23"));
console.log(validatePassword("andre"));
