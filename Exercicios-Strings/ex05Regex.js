function validatePassword(str){
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return regex.test(str);


}

console.log(validatePassword("Andre@Patriarca23"));
console.log(validatePassword("andre"));