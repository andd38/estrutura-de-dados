class Produto{
    constructor(nome,preco,quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade= quantidade;
    }
    Total() {
        return this.quantidade*this.preco;
    }
    updatePrice(number){
        return this.preco *= (1+number/100);
    }
    toString(){
        return `${this.nome} ,${this.preco.toFixed(2)} , ${this.quantidade}`
    }

}


let p1 = new Produto('Laptop',1000.0,'5');
let p2 = new Produto('Headphone',200.0,'2');

console.log(p1.Total())
console.log(p2.Total())
console.log(p2.updatePrice(10))
console.log(p1.updatePrice(10))
