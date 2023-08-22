function validaCpf(cpf) {
    if (!cpf) return false;
    const cpfSplit = cpf.replaceAll('.', '').replace('-', '')
    
    if (cpfSplit.length != 11) 
        return false;
    
    var isSequencial = false;
    
    for (let i = 1; i < cpfSplit.length - 2; i++) {
        if (cpfSplit[i] == cpfSplit[i - 1] &&
            cpfSplit[i] == cpfSplit[i + 1] &&
            cpfSplit[i] == cpfSplit[i + 2])
            isSequencial = true;
    }
    if (isSequencial) 
        return false;
    
    var somaDig1 = 0;
    for (let i = 0; i < cpfSplit.length - 2; i++) {
        somaDig1 += (Number(cpfSplit[i]) * (10 - i));
    }
    if ((11 - (somaDig1 % 11)) != cpfSplit[9]) 
        return false;

    var somaDig2 = 0;
    for (let i = 0; i < cpfSplit.length - 1; i++) {
        somaDig2 += Number(cpfSplit[i]) * (11 - i);
    }
    
    if ((11 - (somaDig2 % 11)) != cpfSplit[10])
        return false;
    return true;
}

module.exports = { validaCpf }