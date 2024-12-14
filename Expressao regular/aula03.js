function validateBrDomain(domain) {
    const regex = /\.br$/;
    return regex.test(domain);
}
console.log(validateBrDomain("batata.com.br")); // true
console.log(validateBrDomain("banana.com"));  
