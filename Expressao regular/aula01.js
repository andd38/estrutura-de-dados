function validateCEP(cep) {
    const regex = /^\d{5}-?\d{3}$/;
    return regex.test(cep);
  }
  
  console.log(validateCEP("12345-678")); // true
  console.log(validateCEP("12345678")); // true
  console.log(validateCEP("1234-5678")); // false
  