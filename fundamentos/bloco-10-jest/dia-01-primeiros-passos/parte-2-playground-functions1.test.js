const { decode, encode, hydrate, techList } = require('./parte-2-playground-functions1.js')

describe('encode e decode', () => {
  it('Testa se encode e decode são funções', () => {
    expect(typeof encode && typeof decode).toEqual('function')
  });
  it('Testa se ao chamar encode as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toEqual('12345')
  });
  it('Testa se ao chamar decode os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('12345')).toEqual('aeiou')
  });
  it('Testa se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('kjhga')).toEqual('kjhg1')
    expect(decode('987654')).toEqual('9876uo')
  });
  it('Testa se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    const string = 'string passada como parâmetro';
    const retornoEncode = encode(string);
    const retornoDecode = decode(string);
    expect(string.length).toEqual(retornoEncode.length);
    expect(string.length).toEqual(retornoDecode.length);
  });
})

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});