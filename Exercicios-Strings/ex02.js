function extractEmailInformation(email) {
    const parts = email.split("@");
    const username = parts[0];
    const domain = parts[1];
  
    const isBrazilian = domain.endsWith(".br");
  
    return { username, domain, isBrazilian };
  }
console.log(extractEmailInformation("andrepatriarca4@gmail.com"));