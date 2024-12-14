


function EscrevaOsDigitos(day,month,year){ 
    let formatDay = String(day).padStart(2,"0");
    let formatMonth = String(month).padStart(2,"0");
    return formatDay+"/"+formatMonth+"/"+year; 
}
console.log(EscrevaOsDigitos(1,1,1999))