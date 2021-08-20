const { sum, myRemove } = require('./functions')

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