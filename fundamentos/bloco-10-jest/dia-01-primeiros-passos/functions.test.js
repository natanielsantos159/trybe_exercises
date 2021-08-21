// refazendo exercicios de teste unitarios usando Jest

const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz } = require('./functions')

describe('A função sum(a, b) deve retornar a soma do parâmetro a com o b', () => {

  it('Testa se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toEqual(9)
  })

  it('Testa se o retorno de sum sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toEqual(0)
  })

  it('Testa se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => { sum (4, '5')}).toThrowError(new Error('parameters must be numbers'))
  })
})

describe('Testa A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  const arr = [1, 2, 3, 4];

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove(arr, 3)).toEqual([1, 2, 4])
  })

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove(arr, 3)).not.toEqual([1, 2, 3, 4])
  })

  it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect(myRemove(arr, 3)).not.toEqual(arr)
  })

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual(arr)
  })
})

describe('Testa se função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array', () => {
  it('Testa se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })
  it('Testa se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });
  it('Testa se quando a função myRemoveWithoutCopy é chamada o array passado por parâmetro sofreu alterações', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    expect(myRemoveWithoutCopy(arr, 11)).toEqual(arr)
  })
  it('Testa se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });
})

describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
  it('Testa se uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz')
  });
  it('Testa se uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(9)).toEqual('fizz')
  });
  it('Testa se uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(10)).toEqual('buzz')
  });
  it('Testa se uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(1)).toEqual(1)
  });
  it('Testa se uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('teste')).toEqual(false)
  });
})



