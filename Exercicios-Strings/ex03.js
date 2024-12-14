function extractDateData(Date){
    const parts = Date.split("/");
    const day = Number(parts[0]);
    const month = Number(parts[1]);
    const year = Number(parts[2]);
    return {day,month,year};
}
function extractDateData2(date) {

    // assumindo sempre vai ter zero à esquerda, podemos usar substring
    const day = Number(date.substring(0, 2));
    const month = Number(date.substring(3, 5));
    const year = Number(date.substring(6));
  
    return { day, month, year };
  }
let result = (extractDateData("27/01/2002"));
console.log(result.day)
console.log(result.month)
console.log(result.year)

