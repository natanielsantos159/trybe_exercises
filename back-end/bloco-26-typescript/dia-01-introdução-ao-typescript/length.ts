const convertionTable =
{
  km: 1000,
  hm: 100,
  dam: 10,
  m: 1,
  dm: 0.1,
  cm: 0.01,
  mm: 0.001,
}

const convert = (valor: number, unidadeBase: string, unidadeParaConversao: string) : string => {
  const metros: number = valor * convertionTable[unidadeBase];
  const converted: number = metros * convertionTable[unidadeParaConversao];
  return `${converted}${unidadeParaConversao}`;
}


console.log(convert(20, 'cm', 'dam'))