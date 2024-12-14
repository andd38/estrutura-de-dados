function invalidTransaction(transaction){
    function Transaction(csv){
        const parts = csv.split(",")
        this.name = parts[0];
        this.time = Number(parts[1]);
        this.amount= Number(parts[2]);
        this.city= parts[3];
    }

    const invalidArray = new Array(transaction.length).fill(false);
    const result=[];
    for (let i = 0; i < transaction.length; i++) {
        const ti =  new Transaction(transaction[i]);
        if(ti.amount>1000){
            invalidArray[i] = true;
        }
        for (let j = i+1; j < transaction.length; j++) {
            const tj = new Transaction(transaction[j]);
            if(ti.name== tj.name && Math.abs( ti.time-tj.time) && ti.city!=tj.city){
                invalidArray[i]=true;
                invalidArray[j]=true;
            }
            
        }
        
    }
    for (let i = 0; i < transaction.length; i++){
        if(invalidArray[i]){
            result.push(transaction[i])
        }
    }
    return result;

}


console.log(invalidTransaction(["alice,20,800,mtv","alice,50,100,beijing"]))
console.log(invalidTransaction(["alice,20,800,mtv","alice,50,1200,mtv"]))

