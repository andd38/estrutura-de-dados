function removerPoints(cpf){
    const regex  = /\D/g
    return cpf.replace(regex,"");
}

console.log(removerPoints("070.217.411-46"))