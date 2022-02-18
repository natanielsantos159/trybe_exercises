var convertionTable = {
    km: 1000,
    hm: 100,
    dam: 10,
    m: 1,
    dm: 0.1,
    cm: 0.01,
    mm: 0.001
};
var convert = function (valor, unidadeBase, unidadeParaConversao) {
    var metros = valor * convertionTable[unidadeBase];
    var converted = metros * convertionTable[unidadeParaConversao];
    return "".concat(converted).concat(unidadeParaConversao);
};
console.log(convert(20, 'cm', 'dam'));
