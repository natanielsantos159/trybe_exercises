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